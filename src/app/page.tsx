import { Suspense } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { getSortedPostsData } from '@/lib/posts'
import { PostsSkeleton } from '@/components/skeletons'

export default async function Home() {
  return (
    <div className="container max-w-4xl mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">記事一覧</h1>
      <Suspense fallback={<PostsSkeleton />}>
        <PostsList />
      </Suspense>
    </div>
  )
}

async function PostsList() {
  const posts = await getSortedPostsData()

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link key={post.id} href={`/${post.id}`}>
          <Card className="h-full hover:bg-muted/50 transition-colors">
            <CardHeader>
              <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              <time className="text-sm text-muted-foreground">
                {post.date}
              </time>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground line-clamp-3">
                {post.description}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
