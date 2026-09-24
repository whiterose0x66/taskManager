import { User } from "../models/userModel.js";

async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.json(users);
  }catch (err) {
    res.status(500).json({ message: "server error", error: err.message });
  }
}

async function getUserById(req, res) {
  try {
    const user = await User.findOne({ _id: req.params.id });

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "server error", error: err.message });
  }
}


async function createUser(req,res) {
  try {
    const {username , password} = req.body ;
    if (!username || !password) {
      return res.status(400).json({message : "username and password are required"})
    }
    const newUser = await User.create({username , password}) ;
    res.status(201).json(newUser) ;
 } catch(err) {
    res.status(500).json({message : "server error" , error : err.message}) ;
  }
}

export { getUserById, getAllUsers , createUser };
