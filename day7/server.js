const app=require('./src/app')
const connectDB=require('./src/config/databse')

connectDB()
app.listen(3000,()=>
    {
        console.log('Server running on port 3000');
})