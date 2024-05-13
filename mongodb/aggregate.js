// Title:MongoDB
// Author:Nithialakshmi.N
// created date:30.04.2024
//  last-Modified date:07.05.2024 




const { MongoClient, MongoDBCollectionNamespace } = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017/employee';

async function connectToMongoDB() {
    const client = new MongoClient(uri); 
    try {
        await client.connect();  

        const db = client.db('employee');
        const collection = db.collection('employee');

        // Perform aggregation
        const aggregationResult = await collection.aggregate([
            // Group documents by department and calculate average salary for each department
            {
                $group: {
                    _id: "$department",
                    averageSalary: { $avg: { $toInt: "$salary" } } // Convert salary to integer and calculate average
                }
            }
        ]).toArray();

      
        console.log("Average salary by department:");
        aggregationResult.forEach(result => {
            console.log(`${result._id}: ${result.averageSalary}`);
        });

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } finally {
      
        await client.close();
    }
}

connectToMongoDB();
