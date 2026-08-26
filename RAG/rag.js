import { PDFParse } from 'pdf-parse';
import fs from 'fs'
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { MistralAIEmbeddings } from "@langchain/mistralai";
import dotenv from 'dotenv'
dotenv.config()
import { Pinecone } from '@pinecone-database/pinecone';

const pc = new Pinecone({
  apiKey:process.env.PINECONE_API
});

const index = pc.index('rag');

const dataBuffer=fs.readFileSync('./August.pdf')

const parser = new PDFParse({
    data:dataBuffer
});

const embeddings = new MistralAIEmbeddings({
  model: "mistral-embed",
  apiKey:process.env.MISTRAL_API
});

const splitter = new RecursiveCharacterTextSplitter({ chunkSize: 500, chunkOverlap: 0 })

const data = await parser.getText();

const docs = await splitter.splitText(data.text)

const combineData = await Promise.all(docs.map(async(elem,indx)=>
{
    const embedding=await embeddings.embedQuery(elem)
    return {
        text:elem,
        embedding
    }
}))

const res=await index.upsert({
    records:combineData.map((elem,indx)=>({
        id:`elem-${indx}`,
        values:elem.embedding,
        metadata:{
            text:elem.text
        }
    }))
})

const queryEmbed=await embeddings.embedQuery("Extra curricular activities")

const final_res=await index.query({
    vector:queryEmbed,
    topK:2,
    includeMetadata:true
})


console.log(JSON.stringify(final_res));

