import { PDFParse } from 'pdf-parse';
import dotenv from 'dotenv'
dotenv.config()
import fs from 'fs'
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { MistralAIEmbeddings } from "@langchain/mistralai";
import { Pinecone } from '@pinecone-database/pinecone';

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API
});

const index = pc.index('rag');

// let dataBuffer=fs.readFileSync('./August.pdf')
// const parser = new PDFParse({
//     data:dataBuffer
// });

// const data = await parser.getText();

// const splitter = new RecursiveCharacterTextSplitter({ chunkSize: 600, chunkOverlap: 0 })

const embeddings = new MistralAIEmbeddings({
  apiKey:process.env.MISTRAL_API,
  model: "mistral-embed", 
});

// const chunks = await splitter.splitText(data.text)

// const docs = await Promise.all(chunks.map(async(elem,indx)=>
// {
//     const embedding=await embeddings.embedQuery(elem)
//     return {
//         text:elem,
//         embedding
//     }
// }))

// const result = await index.upsert({
//     records:docs.map((elem,indx)=>   ({
//         id:`elem-${indx}`,
//         values:elem.embedding,
//         metadata:{
//             text:elem.text
//         }
//     }))
// })

const queryEmbedding=await embeddings.embedQuery("Vice President of which club?")

const result=await index.query({
    vector:queryEmbedding,
    topK:2,
    includeMetadata:true
})

console.log(JSON.stringify(result));

