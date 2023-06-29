import clientPromise from ".";

let client
let db
let users

async function init() {
    if(db) return 
    try {
        client = await clientPromise;
        db = await client.db("IEEE-db")
        users = await db.collection('users')
    } catch (error) {
        throw new Error('Failed to connect');
    }
}

;(async () => {
    await init()
})()

export async function getUsers() {
    try {
        if (!users) await init()
        const result = await users.find({}).map(user => ({...user, _id: user._id.toString()})).toArray()
        return { users: result }
    } catch (error) {
        return { error: 'Failed to fetch users!'}
    }
}

export async function createUser(user) {
    try {
        if (!users) await init()
        await users.insertOne(user);
        console.log("In createUser method!")
    } catch (error) {
      console.error(error);s
    }
}

export async function authUser(user) {
    
}