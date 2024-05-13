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

// insertOne
        const ackResult = await collection.insertOne({
            id: 5,
            firstName: 'Johnny',
            lastName: 'Steves',
            gender: 'male',
            emailid: 'john.steve@abc.com',
            salary: 50000,
            department: 'Developer'
        });

        console.log("The record inserted into the collection with ID: " + ackResult.insertedId);
        
        await client.close();

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

connectToMongoDB();