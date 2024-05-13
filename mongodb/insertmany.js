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


 //insertMany      
        const manyDocumentsToInsert = [
            {
                id: 6,
                firstName: 'Deva',
                lastName: 'dharshini',
                gender: 'female',
                email: 'deva@gmail.com',
                salary: 70000,
                department: 'tester' 
            },{
                id: 7,
                firstName: 'Preetha',
                lastName: 'Iyyanar',
                gender: 'female',
                email: 'preetha@gmail.com',
                salary: 60000,
                department: 'TN'
            },
            {
                id: 8,
                firstName: 'priya',
                lastName: 'dharshini',
                gender: 'female',
                email: 'priya@gmail.com',
                salary: 70000,
                department: 'tester' 
            }
        ];

    
        const manyAckResult = await collection.insertMany(manyDocumentsToInsert);
        console.log("The " + manyAckResult.insertedCount + " records inserted into the collection");
        
        await client.close();

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}


connectToMongoDB();