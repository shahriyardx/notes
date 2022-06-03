import { getSession } from "next-auth/react";
import Note from "../../../database/schema/Note";

const handler = async (req, res) => {
  if (!req.method === "GET") {
    res.statusCode = 401;
    return res.json({ error: "Bad request" });
  }

  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return res.json({ error: "Unauthorized" });
  }

  const notes = await Note.find({ email: session.user.email });
  res.json(notes);
};

export default handler;
