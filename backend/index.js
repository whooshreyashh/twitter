const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://twitter_admin:ZjQJiWj8vLKDssFZ@shreyash.l5szclc.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try{
    await client.connect();
    const postCollection = client.db('database').collection('posts') //this is post collection
    const userCollection = client.db('database').collection('users') //this is user collection

    //get
    app.get('/post', async(req,res)=>{
      const post = await postCollection.find().toArray();
      res.send(post);
    })

    //post
    app.post('/post', async(req, res)=>{
      const post = req.body;
      console.log(req.body);
      // const result = await postCollection.insertOne(post);
      // res.send(result);
    })


  } catch (error) {
    console.log(error);
  }
} run().catch(console.dir)


app.get('/', (req, res) => {
  res.send('Hello from BubbleChat')
})

app.listen(port, () => {
  console.log(`Twitter listening on port ${port}`)
})