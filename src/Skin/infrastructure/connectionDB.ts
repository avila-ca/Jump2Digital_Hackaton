import mongoose from "mongoose";

export const connectionDB = async () => { 
try{
const nameDB = process.env.DATABASE!;
const urlDB = process.env.MONGO_URI!;
mongoose.set("debug", true);
mongoose.set("toJSON", {transform(doc, ret) {delete ret._id;}});

mongoose
.connect(urlDB)
.then(() => console.log(`${nameDB} connected! `));
}catch(err){
    console.log(`Error connection database: ${err}`);
}
}
