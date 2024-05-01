import PostCard from "./post-card";
import { type Post } from "../types/posts";

export function PostList({posts} : {posts: Post[]}) {
  return (
    <>
      {posts?.map(post => {
        const {
          id,
          user,
          content
        } = post

        const {
          name: userFullName,
          user_name: userName,
          avatar_url: avatarUrl,
        } = user
        
        return (
          <PostCard 
            key={id}
            userFullName={userFullName} 
            userName={userName} 
            avatarUrl={avatarUrl}    
            content={content}      
          />
        )
      })}
    </>
  )
}
