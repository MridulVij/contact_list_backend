import mongoose from "mongoose"
mongoose.set('strictQuery', true);
const  connect = async () =>
{
    try {
        //          TRY TO CONNECT TO DATABASE
        const res = await mongoose.connect("mongodb+srv://mridul123:RAZ6M5xjiM3hogtc@cluster0.3twos6c.mongodb.net/?retryWrites=true&w=majority")
        if (res)
            console.log("Connect to database")
    
    } catch (error) {
        console.log(error)
    }
}

export default connect;