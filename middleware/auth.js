const { default: next } = require("next");

import { getSession } from "next-auth/client";

const Auth = async (req, res, next) => {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).send({ message: "not authenticated" });
  }
  req.session = session;
  next();
}

export default Auth;