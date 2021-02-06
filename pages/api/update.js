import { ESRCH } from 'constants';
import connect from '../../util/db';

export default async (req, res) => {
    const { db } = await connect();

    const current = await db.collection('Meals').findOne({
        meal: req.query.meal
    })
    
    const result = await db.collection('Meals').updateOne({
        meal: req.query.meal
    }, {$set: {
        fed: !current.fed,
        lastUpdated: new Date()
    }});

    res.json(result);
}