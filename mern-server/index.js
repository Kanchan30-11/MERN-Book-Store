const express = require ('express');
const app = express();
const port = process.env.PORT ||5000;
const cors = require ('cors');


//Middleware;
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hello World')
})


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://kanchansingh30nov:abhinaychamcham@cluster0.qykwopm.mongodb.net/?retryWrites=true&w=majority";

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
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // create a collectiom
    const bookCollection = client.db("BookInventory").collection("books")

    //insert a book to database:post the book to collection;
    app.post('/uploadBook',async(req,res)=>{
        const data = req.body;
        const result = await bookCollection.insertOne(data);
        res.send(result);
    })
     
    // get all books from database
    app.get('/allBooks',async(req,res)=>{
        const books = bookCollection.find();
        const result = await books.toArray();
        res.send(result);
    })

    //update a book
    app.patch('/book/:id',async(req,res)=>{
       const id=req.params.id;
       const updateBookData = req.body;
       const filter = {_id:new ObjectId(id)}

       const options = {upsert :true}

       const updateDoc ={
        $set:{
          ...updateBookData
        }
      }
        //update 
        const result = await bookCollection.updateOne(filter,updateDoc,options);
        res.send(result);
      
    })
    //Delete a book
    app.delete('/book/:id',async(req,res)=>{
      const id=req.params.id;
      const filter = {_id:new ObjectId(id)}
      const result = await bookCollection.deleteOne(filter);
      res.send(result);
    })

    // find by category 
    app.get('/allBooks',async(req,res)=>{
      let query ={}
      if(req.query?.category){
        query ={category :req.query.category}
      }
      const result = await bookCollection.find(query).toArray();
      res.send(result)
    })

    //to get single book
    app.get("/book/:id",async(req,res)=>{
      const id=req.params.id;
      const filter = {_id:new ObjectId(id)}
      const result = await bookCollection.findOne(filter)
      res.send(result)
    })
    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})