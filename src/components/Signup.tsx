
"use client"
import  React,{useState} from "react"
import { signIn, } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"

export const Signup=()=>{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [showPassowrd,setShowPassword]=useState(false)
    const [showConfirmPassowrd,setShowConfirmPassword]=useState(false)
    const router = useRouter();

    const  onSignup=async ()=>{
      try{
        const response=await axios.post('/api/signup',{
          name,
          email,
          password
        })
        if(response){
          signIn()
        }
      }catch(e){
        alert('signup failed')
      }
    }
 return (

  
<main className="flex items-center justify-center w-full h-screen ">   
  
 <section className="flex flex-col h-1/2  w-1/2 items-center justify-center ">
    <Card className="w-[380px] mb-5 border-0 ">
        <CardHeader>
            <CardTitle>Create Your Account </CardTitle>
            
        </CardHeader>
        <CardContent>
            
            <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input onChange={(e)=>{
                    setName(e.target.value)
                    
                }} id="name" placeholder="jon doe" />
                </div>
                <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input onChange={(e)=>{
                    setEmail(e.target.value)
                    
                }} id="email" placeholder="name@mail.com" />
                </div>
                <div className=" relative flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input onChange={(e)=>{
                    setPassword(e.target.value)
                }}id="password" type={showPassowrd?"text":"password"} placeholder="********" />
               
               <button
                  className="absolute right-0 bottom-0 flex h-10 items-center px-4 text-gray-600"
                  onClick={()=>{setShowPassword(!showPassowrd)}}
                >
                  {showPassowrd ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                </button>
                
              
                </div>
                <div className=" relative flex flex-col space-y-1.5">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input onChange={(e)=>{
                    setConfirmPassword(e.target.value)
                }}id="password" type={showConfirmPassowrd?"text":"password"} placeholder="********" />
                <button
                  className="absolute right-0 bottom-0 flex h-10 items-center px-4 text-gray-600"
                  onClick={()=>{setShowConfirmPassword(!showConfirmPassowrd)}}
                >
                  {showConfirmPassowrd ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                </button>
                </div>
                
            </div>
            
        </CardContent>
        <CardFooter className="flex  justify-center">
            
            <Button onClick={onSignup } className="w-full ">Create an account</Button>
            
            
        </CardFooter>
        <div className="flex text-sm justify-center items-center pb-3">
          <p>Already have an account?</p>
          <a href="/signin" className="underline cursor-pointer">Sign in</a>
        </div>
    </Card>
    
    </section>
    </main>
 )
}

