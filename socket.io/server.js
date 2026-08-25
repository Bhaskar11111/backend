const app=require('./src/app')
const {createServer}=require('http')
const {Server}=require('socket.io')

const httpServer=createServer(app)
const io=new Server(httpServer,{})

io.on("connection",(socket)=>
{
    console.log("Connection established")
    
    socket.on("message",(msg)=>
    {
        console.log('user fired message event')
        console.log(msg)
        io.emit("abc",msg) //msg is the one we wrote in postman in JSON format

    })
})

httpServer.listen(3000,()=>
{
    console.log('Server running on port 3000')
})