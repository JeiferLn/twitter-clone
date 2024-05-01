import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { AuthButtonServer } from "./components/auth-button-server";
import { redirect } from "next/navigation";
import { PostList } from "./components/post-list";
import { Database } from "./types/database";
import ComposePost from "./components/compose-post";

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: { session } } = await supabase.auth.getSession();
  // if(session === null){
  //   redirect('/login');
  // }

    const { data: posts } = await supabase
      .from('posts')
      .select('*, user:users(*)')
      .order('created_at', { ascending: false })
    
  return (
    <main className="flex items-center justify-around">
      <AuthButtonServer />
      <section className="w-2/5 border-l border-r border-white/20 min-h-screen">
        <ComposePost userAvatarUrl={session?.user?.user_metadata?.avatar_url} isUser={session ? true : false}/>
        <PostList posts={posts}/>
      </section>
    </main>
  );
}
