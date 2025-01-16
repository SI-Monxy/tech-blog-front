// components/back-button.tsx
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function BackButton() {
  return (
    <Button
      variant="outline"
      size="sm"
      asChild
      className="mb-6"
    >
      <Link href="/">
        <ArrowLeft className="mr-2 h-4 w-4" />
        ホームへ戻る
      </Link>
    </Button>
  )
}