'use client'
import { useFormStatus } from "react-dom"
import { GithubIcon } from "./icons";
import { handleSignIn } from "../actions/action-auth";

export function ComposePostButton ({isUser} : {isUser: boolean}) {
  const { pending } = useFormStatus();

  return (
    <>
    {isUser === true ? (
      <button 
        disabled={pending}
        type="submit" 
        className="bg-sky-500 text-small font-bold rounded-full px-5 py-2 self-end max-w mr-3 mb-3 disabled:opacity-40 disabled:pointer-events-none"
      >
        {pending? 'Posteando...' : 'Postear'}
      </button>
    ) : (
      <button onClick={handleSignIn} type="button" className="text-white bg-[#24292F] focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 m-3 text-center inline-flex items-center focus:ring-gray-500 hover:bg-[#050708]/30 w-auto self-end">
        <GithubIcon />
        Iniciar Sesión con Github
      </button>
    )}
    </>
  )
}