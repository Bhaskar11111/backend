require('dotenv').config();
const { ChatMistralAI } = require('@langchain/mistralai');
const readline = require('readline/promises');
const {HumanMessage}=require('@langchain/core/messages')
const sendEmail=require('./mail.service')
const {tool}=require('@langchain/core/tools')
const {z}=require('zod')
const {createAgent} = require('langchain')

const emailTool=tool(
    sendEmail,
    {
        name:'emailTool',
        description:'This tool can send emails',
        schema:z.object({

            to:z.string().describe("This is recipient's email address"),

            subject:z.string().describe("It cotains the subject of a mail"),

            html:z.string().describe("It is the main body of an email")
        })
    })


const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const model=new ChatMistralAI({
    model:'mistral-small-latest',
    apiKey:process.env.MISTRAL_API_KEY
})

const agent=createAgent({
    model,
    tools:[emailTool]
})

const messages=[]

const run=async()=>
{
    while(true)
{
    try{
    const userInput=await rl.question("You: ")
    messages.push(new HumanMessage(userInput))

    const res=await agent.invoke({messages})
    messages.push(res.messages[res.messages.length-1])
    console.log(res.messages[res.messages.length-1].content)
    
}

catch(err){
    console.error(err);  
}
}
rl.close()
}

run()