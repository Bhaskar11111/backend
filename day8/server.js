const app=require('./src/app')
const connectDB=require('../day8/src/config/database')

connectDB()
app.listen(3000,()=>
{
    console.log('Server running on port 3000');
})