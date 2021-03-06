import ns from "next-connect";
import database from './database';
import cors from './cors';

const middleware = ns();
middleware.use(cors).use(database)

export default middleware;