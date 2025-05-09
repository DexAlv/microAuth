import { MongoClient, ServerApiVersion } from "mongodb";
import { config } from "dotenv";

config();

const uri: string = process.env.MONGO_URI!;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let db : any;

export async function connectToMongoDB() {
    try {
        await client.connect();
        db = client.db("login_db");
        console.log("🟢 Successfully connected to MongoDB");
    } catch (error) {
        console.error("🔴", error);
        process.exit(1);
    }
}

export function getDB() {
    if (!db) { 
        throw new Error("❌ MongoDB has not been initialized.")
    }
    return db;
}