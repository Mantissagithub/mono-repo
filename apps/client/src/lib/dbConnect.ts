import mongoose from "mongoose";
let alreadyDone = false;

export async function ensureDbConnected() {
    if (alreadyDone) {
        return;
    }
    alreadyDone = true;
    await mongoose.connect('mongodb+srv://mantissa6789:Mantis%401647@cluster0.9ramotn.mongodb.net/courses', { dbName: "courses" });
}