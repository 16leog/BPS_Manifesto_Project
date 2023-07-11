import { NextApiRequest, NextApiResponse } from 'next';
import { getDb, initializeDb } from '../../../lib/database';

initializeDb();

export default (req: NextApiRequest, res: NextApiResponse) => {
  const db = getDb();

  db.all('SELECT * FROM MyTable', [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
};
