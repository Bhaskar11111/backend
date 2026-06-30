import 'dotenv/config'
import {ChatMistralAI} from '@langchain/mistralai'
import readline from 'readline/promises'
import {HumanMessage} from 'langchain'
import { sendEmail } from './mail.service.js'
import * as z from 'zod'
import {tool} from 'langchain'
import { createAgent } from 'langchain'

const emailTool=tool(
    sendEmail,
    {
        name:'emailTool',
        description:'This tool can send emails',
        schema:z.object({

            to:z.string().describe("Recipient's email"),

            subject:z.string().describe("Subject of the email"),

            html:z.string().describe("Content of an email"),
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

while(true)
{
    const userInput=await rl.question("You: ")
    messages.push(new HumanMessage(userInput))

    const res=await agent.invoke({messages})
    messages.push(res.messages[res.messages.length-1])

    console.log(res.messages[res.messages.length-1].content)
}
