import { MongoClient } from "mongodb";
import ns from "next-connect";

const client = new MongoClient(process.env.MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db("glossary");
  return next();
}

const middleware = ns();
middleware.use(database);

export default middleware;
