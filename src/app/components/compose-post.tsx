'use client'
import { Avatar } from "@nextui-org/react"
import { ComposePostButton } from "./compose-post-button"
import { useRef } from "react"
import { addPost } from "../actions/action-form."

export default function ComposePost({
  userAvatarUrl,
  isUser
} : {
  userAvatarUrl: string,
  isUser: boolean
}) {
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <form ref={formRef} action={async (formData: FormData) => {
      await addPost(formData);
      formRef.current?.reset()
    }} className="flex flex-1 flex-row gap-y-4 pt-3"> 
      <Avatar radius="full" size="md" src={userAvatarUrl} className="w-10 h-10 ml-3 mt-3"/>
      <div className="flex flex-1 flex-col gap-y-4">
        <textarea
          name="content" 
          rows={4}
          className="w-full h-20 min-h-10 max-h-60 text-l bg-black placeholder-gray-500 pl-3 pt-4 outline-none bg-transparent" 
          placeholder="¡¿Qué está Pasando?!"
        ></textarea>
        <ComposePostButton isUser={isUser}/>
      </div>
    </form>
  )
}
