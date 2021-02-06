import { ESRCH } from 'constants';
import connect from '../../util/db';

export default async (req, res) => {
    const { db } = await connect();
    const result = db.collection('Meals').find();
    console.log(result);
    res.json(result);
}