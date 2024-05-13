const { MongoClient } = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017/employee';


const client = new MongoClient(uri);


async function connectToMongoDB() {
    try {
        await client.connect();  

        const db = client.db('employee');
        const collection = db.collection('employee');

       
        const cursor = collection.find({});
        await cursor.forEach(record => {
            console.log(record);
        });





        
//deleteMany        
        const deleteManyResult = await collection.deleteMany(
            { gender:"female" } 
        );
        console.log("Deleted " + deleteManyResult.deletedCount + " documents");


        await client.close();

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
connectToMongoDB();