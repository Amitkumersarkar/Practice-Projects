const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.USER_PASS}@cluster0.5akcy0w.mongodb.net/?appName=Cluster0`;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server
        await client.connect();
        // database collection
        const jobsCollection = client.db('career-codeDB').collection('jobs');
        const applicationCollection = client.db('careerCode').collection('application');

        // post apis 
        app.post('/jobs', async (req, res) => {
            const newJobs = req.body;
            const result = await jobsCollection.insertOne(newJobs);
            res.send(result);
        })
        // get apis
        app.get('/jobs', async (req, res) => {
            const query = jobsCollection.find();
            const result = await query.toArray();
            res.send(result);
        })

        // get apis for specific id/details
        app.get('/jobs/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await jobsCollection.findOne(query);
            res.send(result)
        })


        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


// route apis
app.get('/', (req, res) => {
    res.send('The career code is running');
})

app.listen(port, () => {
    console.log(`the career server is running on port:${port}`)
})