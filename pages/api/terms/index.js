import nc from "next-connect";
import middleware from "../../../middleware";

const handler = nc();
handler.use(middleware);

handler.get(async (req, res) => {
  const {
    query: { term = "", page = 0, limit = 50 },
  } = req;

  const pageNum = Number(page);
  const limitNum = Number(limit);

  const results = await req.db
    .collection("terms")
    .find({
      name: { $regex: new RegExp(term, "i") },
    })
    .skip(pageNum > 0 ? (pageNum - 1) * limitNum : 0)
    .limit(limitNum)
    .toArray();

  if (!results) {
    return res.status(400).send("term not found");
  }

  const nextPage = pageNum + 1;

  res.json({ results, query: { term, limit: limitNum, page: nextPage } });
});

handler.post(async (req, res) => {
  const { name, description } = JSON.parse(req.body);
  if (!name || !description)
    return res.status(400).send("both name and description must be supplied");

  let response;
  try {
    const term = await req.db
      .collection("terms")
      .insertOne({ name, description });
    response = term.ops[0];
  } catch (error) {
    return res.status(400).send("Failed validation");
  }

  res.json(response);
});

export default handler;
