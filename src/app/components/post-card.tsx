'use client'
import {Card, CardHeader, CardBody, CardFooter, Avatar} from "@nextui-org/react";
import Link from "next/link";
import { IconMessageCircle } from '@tabler/icons-react'
import { IconRepeat } from '@tabler/icons-react'
import { IconHeart } from '@tabler/icons-react'

interface PostCardProps {
  userFullName: string,
  userName: string,
  content: string,
  avatarUrl: string
}

export default function PostCard({
  userFullName,
  userName,
  content,
  avatarUrl
} : PostCardProps) {
  return (
    <Card className="shadow-none bg-transparent hover:bg-slate-800 rounded-none border-y border-white/20 cursor-pointer">
      <CardHeader className="justify-between">
        <div className="flex gap-x-3">
          <Link href={`/${userName}`}>
            <Avatar radius="full" size="md" src={avatarUrl}/>
          </Link>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{userFullName}</h4>
            <h5 className="text-small tracking-tight text-default-400">@{userName}</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-white">
        <p>
          {content}
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <button>
          <IconMessageCircle stroke={2} className="w-5 h-5 text-white"/>
        </button>
        <button>
         <IconRepeat className="w-5 h-5 text-white"/>
        </button>
        <button>
          <IconHeart className="w-5 h-5 text-white"/>
        </button>
      </CardFooter>
    </Card>
  )
}
