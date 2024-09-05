// import { PrismaClient } from "@prisma/client";
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";

// const prisma = new PrismaClient();

export const NEXT_AUTH_CONFIG={
    providers: [
      CredentialsProvider({
          name: 'Email',
          credentials: {
            email: { label: 'email', type: 'text', placeholder: '' },
            password: { label: 'password', type: 'password', placeholder: '' },
          },
          async authorize(credentials:any) {
              console.log(credentials.password)
              const hashedPassword = await bcrypt.hash(credentials.password, 10)
              
              
            //   const existingUser = await prisma.user.findFirst({

            //     where: {
            //         email: credentials.email
            //     }
            //   });
              
            //   if (existingUser) {
                
            //     console.log(credentials.email)
            //     const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
            //     console.log(passwordValidation,"here")
            //     if (passwordValidation) {
                  
            //         return {
            //             id: existingUser.id.toString(),
            //             name: existingUser.name,
            //             email: existingUser.email
            //         }
            //     }
            //     return null;
            //   }
            return null;

          },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET||""
          })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: async ({ user, token }: any) => {
        if (user) {
            token.uid = user.id;
        }
        return token;
        },
      session: ({ session, token, user }: any) => {
          if (session.user) {
              session.user.id = token.uid
          }
          return session
      }
    },
    pages: {
      signIn: '/signin',
    },
  }