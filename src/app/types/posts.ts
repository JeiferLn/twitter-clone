import { type Database } from "../types/database";

type PostEntity = Database["public"]["Tables"]["posts"]["Row"]
type UserType = Database["public"]["Tables"]["users"]["Row"]

export type Post = PostEntity & {
  user: UserType
}