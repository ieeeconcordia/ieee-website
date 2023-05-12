import { MongoClient } from "mongodb";

const URI = "mongodb+srv://webmaster:bits4bytes@ieee-db.4rk1mly.mongodb.net/?retryWrites=true&w=majority"
const options = {}

if (!URI) throw new Error("Wrong URI");

let client = new MongoClient(URI, options);
let clientPromise = client.connect();

export default clientPromise;