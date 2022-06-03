import { getSession } from "next-auth/react";
import Note from "../../../database/schema/Note";

const handler = async (req, res) => {
  if (!req.method === "POST") {
    res.statusCode = 401;
    return res.json({ error: "Bad request" });
  }

  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return res.json({ error: "Unauthorized" });
  }

  await Note.create({ ...req.body, email: session.user.email });
  res.json({ message: "Note created successfully" });
};

export default handler;
