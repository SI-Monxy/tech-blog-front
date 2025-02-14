import { allPosts } from "@/.contentlayer/generated";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {

    const posts = allPosts;

    return (
        <div className="container mx-auto p-4 max-w-4xl py-6 lg:py-10">
            <div>
                <div className="space-y-4">
                    <h1 className="font-extrabold text-4xl lg:text-5xl tracking-tight">
                        Blog 🚀
                    </h1>
                    <p className="text-muted-foreground text-xl">
                        ContentLayerとMDXで書いています。
                    </p>
                </div>
            </div>
            <hr className="my-8" />
            {posts.map((post) => (
                <article key={post._id} className="relative flex flex-col items-center text-left">
                    {post.image && <Image src={post.image} alt={post.title} width={604} height={252} className="rounded-md border bg-muted"/>}
                    <h2 className="text-2xl font-extrabold">
                        {post.title}
                    </h2>
                    <p className="text-muted-foreground">{post.description}</p>
                    <p className="text-sm text-muted-foreground">
                        {format(post.date, "yyyy/MM/dd")}
                    </p>
                    <Link href={post.slug} className="absolute inset-0"/>
                </article>
            ))}
        </div>
    );
}