import ContactModel from "@/models/ContactModel";
import ConnectDB from "@/services/Mongo";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ msg: "Hello Again" })
}

export async function POST(req) {
  try {
    const { yourName, email, message } = await req.json();
    await ConnectDB();
    await ContactModel.create({ yourName, email, message });
    return NextResponse.json({ message: "Record created succesfully ", success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }

}