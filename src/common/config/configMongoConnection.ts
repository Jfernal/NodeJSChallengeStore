import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_HOST = process.env.MONGO_HOST;
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_CLUSTER = process.env.MONGO_CLUSTER;
const MONGO_DBNAME = process.env.MONGO_DBNAME;

export class MongoConnection {
    private uri = `${MONGO_HOST}://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.unqyghm.mongodb.net/${MONGO_DBNAME}?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin`;

    async connect() {
        return await mongoose.connect(this.uri);
    }
}