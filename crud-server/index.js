require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 7000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// middleware
app.use(cors());
app.use(express.json());

// mongodb connection
const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.USER_PASS}@cluster0.nkwifvw.mongodb.net/?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {
        // connect with database
        const usersCollection = client.db('usersDB').collection('users');
        // Connect the client to the server
        await client.connect();

        // creating Apis (create/post)
        app.post('/users', async (req, res) => {
            const newUser = req.body;
            const result = await usersCollection.insertOne(newUser);
            res.send(result);
        })

        // read Apis (get/read)
        app.get('/users', async (req, res) => {
            const cursor = usersCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        // delete methods
        app.delete('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await usersCollection.deleteOne(query);
            res.send(result);

        })

        // update method
        app.put('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const user = req.body;
            const updatedDoc = {
                $set: {
                    name: user.name,
                    email: user.email,

                }
            }
            const options = { upsert: true };
            const result = await usersCollection.updateOne(query, updatedDoc, options);
            res.send(result)
        })


        //load specific by get method

        app.get('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await usersCollection.findOne(query);
            res.send(result);
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error

    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('crud server is running');
})

app.listen(port, () => {
    console.log(`the crud server is running on port:${port}`)
})
