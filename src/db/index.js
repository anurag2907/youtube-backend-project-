
import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';


const connectDb = async () => {
    try{ 

       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       console.log(` \n MongoDb connected !! Db hosted: ${connectionInstance.connection.host }`)
       //connection instance ko ek baar console .log kara ke dekhna ha 

    }
    catch (error) {

        console.log("MONGODB CONNECTION FAILED ",error); 
        process.exit(1);

    }
}

export default connectDb