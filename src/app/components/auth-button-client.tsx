'use client'
import { Session } from "@supabase/auth-helpers-nextjs";
import { GithubIcon, LogOut } from "./icons";
import { Button } from "@nextui-org/button";
import { handleSignIn, handleSignOut } from "../actions/action-auth";
import { useRouter } from "next/navigation";
import { Avatar } from "@nextui-org/react";

export default function AuthButton({ session } : { session:  Session | null}) {
  const router = useRouter()

  const navigation = async () => {
    await handleSignOut()
    router.refresh()
  }

  return (
    <header>
      <div className="flex flex-col items-center border border-white/20 p-10 rounded-md fixed top-1/3 left-0 translate-x-1/2">
        {
          session === null ? (
              <div className="text-center">
                <h1 className="text-white text-2xl mb-5 text-center">Bienvenido al Twitter Clone</h1>
                <button onClick={handleSignIn} type="button" className="text-white bg-[#24292F] focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-500 hover:bg-[#050708]/30">
                <GithubIcon />
                  Iniciar Sesión con Github
                </button>
              </div>
            
          ) : (
            <div className="text-center">
              <div className="flex flex-col items-center">
                <Avatar radius="full" size="md" src={session?.user?.user_metadata?.avatar_url} className="w-20 h-20 mb-5"/>
                <h1 className="text-2xl font-bold mb-5">Bienvenido {session?.user?.user_metadata?.name}</h1>
              </div>
              <Button className="dark" onClick={navigation}>
                <LogOut />
                Cerrar Sesión
              </Button>
            </div>
          )
        }
      </div>
      

    </header>
  )
}
