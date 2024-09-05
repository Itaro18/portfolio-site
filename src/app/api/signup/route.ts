// import { PrismaClient } from "@prisma/client";
// import CredentialsProvider from 'next-auth/providers/credentials';
// import GoogleProvider from "next-auth/providers/google";
// import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

// const prisma = new PrismaClient();
export async function POST(request:NextRequest){

    const body=await request.json();
    try{
        // const existingUser = await prisma.user.findFirst({

        //     where: {
        //         email:body.email
        //     }
        //   });
        //   if(existingUser){
        //     return NextResponse.json({error:"user already exists"},{status:411})
        //   }
        //   else  {
        //     const hashedPassword = await bcrypt.hash(body.password, 10)
        //     const user = await prisma.user.create({
        //         data: {
        //             email: body.email,
        //             name:body.name,
        //             password: hashedPassword
        //         }
        //     });
        //   }
          
          return NextResponse.json({message:"user created successfully"},{status:201})
       
    }
    catch (e:any){
        return NextResponse.json({error:e.message},{status:500})
    }
    
}
