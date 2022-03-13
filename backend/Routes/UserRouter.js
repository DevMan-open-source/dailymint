//Route to be used "/api/user/message"

const express = require("express");
//  Importing contact model
const Contact = require("../Models/Contactus");
//Creating router
const userRouter = express.Router();
//API for posting message
userRouter.post("/message", (req, res) => {
  try {
    const { name, email, phonenumber, message } = req.body;
    if (!name || !email || !phonenumber || !message) {
      res.status(400).send({ Message: "All fields are not filled" });
      return;
    }
    const NewMessage = await Contact.create({ ...req.body });
    if (NewMessage) {
      res.status(200).send(NewMessage);
      return;
    } else {
      res.status(400).send({ Message: "Could not post message" });
    }
  } catch (e) {
    res.status(500).json({ Message: e });
  }
});
//Exporting router
module.exports = userRouter;
