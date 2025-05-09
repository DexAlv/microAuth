import { getDB } from "../db/mongoClient";
import { User } from "../interfaces/User";

export const createUser = async (user: User) => {
    const db = getDB();
    const collection = db.collection("users");
    const result = await collection.insertOne(user);
    return result;
}

export const getUserByEmail = async (email: string) => {
    const db = getDB();
    const collection = db.collection("users");
    const user = await collection.findOne({ email });
    return user;
}

export const getUserByUsername = async (username: string) => {
    const db = getDB();
    const collection = db.collection("users");
    const user = await collection.findOne({ username });
    return user;
}