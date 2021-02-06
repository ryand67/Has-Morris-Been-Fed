import connect from '../../util/db';

export default async (req, res) => {
    const { db } = await connect();

    const final = {};

    const result = await db.collection('Meals').find({}).toArray();

    res.json(result);
}