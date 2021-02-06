import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

async function connect() {
    if(!client.isConnected()) await client.connect();
    const db = client.db('meals');
    return { db, connect };
}

export default { connect };