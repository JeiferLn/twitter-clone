'use client'
import { useRouter } from "next/navigation";

export function useNavigation() {
  return useRouter();
}