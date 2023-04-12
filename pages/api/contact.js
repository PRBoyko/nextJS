import { MongoClient } from "mongodb";

async function handler(req, res) {  
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.2ohef.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
    if (req.method === 'POST') {
        const { email, message, name } = req.body;
        const newMessage = { email, name, message };
        const client = await MongoClient.connect(connectionString);
        const db = client.db();
        const result = await db.collection('messages').insertOne(newMessage);
        newMessage.id = result.id;
        client.close();
        res.status(201).json({ message: 'OK' })
    }

}

export default handler