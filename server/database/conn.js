import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

const connect = async () => {
  const mongod = await MongoMemoryServer.create()
  const uri = mongod.getUri()

  mongoose.set('strictQuery', true);

  const db = await mongoose.connect(uri);
  console.log("database connected");
  return db
}

export default connect