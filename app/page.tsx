'use client'
import Image from "next/image";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-around items-center p-24">
      <h1 className="text-3xl">
        Quotes From the Night
      </h1>
      <div className="flex flex-row">
          <LoginForm />
        <div className="w-8 h-8 border-4 border-t-transparent border-blue-500 rounded-full animate-spin">
        </div>
  
      </div>
      
    </main>
  );
}
