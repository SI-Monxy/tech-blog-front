// components/skeletons.tsx
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function PostsSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card key={i} className="h-full">
          <CardHeader>
            <Skeleton className="h-6 w-2/3" />
            <Skeleton className="h-4 w-1/3 mt-2" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-20" />
          </CardContent>
        </Card>
      ))}
    </div>
  )
}