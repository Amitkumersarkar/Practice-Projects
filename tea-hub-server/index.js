require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 4000;
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// middleware
app.use(cors());
app.use(express.json());

// mongodb connection
const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.USER_PASS}@cluster0.nkwifvw.mongodb.net/?appName=Cluster0`;

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
        const teaHubCollection = client.db('TeaHub').collection('Teas');

        // post api
        app.post('/teas', async (req, res) => {
            const NewTea = req.body;
            // console.log(NewTea)
            const result = await teaHubCollection.insertOne(NewTea);
            res.send(result);
        })

        // get apis
        app.get('/teas', async (req, res) => {
            const cursor = teaHubCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        // delete apis
        app.delete('/teas/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await teaHubCollection.deleteOne(query);

            res.send(result);

        })

        // get apis to get specific one data (view section)
        app.get('/teas/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await teaHubCollection.findOne(query);

            res.send(result);
        })

        // update apis
        app.put('/teas/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) }
            const updatedTea = req.body;
            // main point
            const updatedDoc = {
                $set: updatedTea
            }
            const result = await teaHubCollection.updateOne(filter, updatedDoc)
            res.send(result);
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);




app.get('/', (req, res) => {
    res.send('TeaHub server is running');
})

app.listen(port, () => {
    console.log(`the teaHub server is running on port:${port}`)
})