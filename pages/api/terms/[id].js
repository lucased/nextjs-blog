import nc from "next-connect";
import middleware from "../../../middleware";
import auth from "../../../middleware/auth";
import { ObjectId } from "mongodb";

const handler = nc();
handler.use(middleware);
handler.use(auth);

handler.get(async (req, res) => {
  const { query } = req;

  const o_id = new ObjectId(query.id);
  const term = await req.db.collection("terms").findOne({ _id: o_id });

  if (term) {
    res.json(term);
  } else {
    res.status(404).send({ message: "term with provided id not found" });
  }
});

handler.patch(async (req, res) => {
  const {
    query: { id },
    body,
  } = req;

  const data = JSON.parse(body);

  if (!id) return res.status(400).send("An Id must be provided");
  const o_id = ObjectId(id);

  try {
    await req.db.collection("terms").updateOne({ _id: o_id }, { $set: data });
  } catch (error) {
    throw new Error(error);
  }

  const updatedTerm = await req.db.collection("terms").findOne({ _id: o_id });
  res.json(updatedTerm);
});

handler.delete(async (req, res) => {
  const {
    query: { id },
  } = req;

  if (!id) return res.status(400).send({ message: "An Id must be provided" });

  let result;

  try {
    const o_id = ObjectId(id);
    result = await req.db.collection("terms").deleteOne({ _id: o_id });
  } catch (error) {
    throw new Error(error);
  }

  if (result.deletedCount !== 1)
    return res.status(400).send({ message: "Did not delete any documents" });

  res.status(204).send({ message: "ok" });
});

export default handler;
