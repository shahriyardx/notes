import { getSession } from "next-auth/react";
import Note from "../../../database/schema/Note";

const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    res.statusCode = 403;
    return res.json({ error: "Unauthorized" });
  }

  const { id } = req.query;
  if (req.method == "GET") {
    const note = await Note.findOne({ _id: id, email: session.user.email });
    res.json(note);
  } else if (req.method == "PUT") {
    await Note.updateOne(
      { _id: id },
      {
        $set: req.body,
      }
    );

    res.json({ message: "Note updated" });
  } else if (req.method == "DELETE") {
    await Note.deleteOne({ _id: id, email: session.user.email });
    res.json({ message: "Note deleted" });
  } else {
    res.statusCode = 401;
    return res.json({ error: "Bad request" });
  }
};

export default handler;
