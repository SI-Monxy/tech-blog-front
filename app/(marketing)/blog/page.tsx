import { allPosts } from "@/.contentlayer/generated";
import { format } from "date-fns";
import Image from "next/image";

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
                <article key={post._id} className="flex flex-col items-center text-left">
                    {post.image && <Image src={post.image} alt={post.title} width={604} height={252} className="rounded-md border bg-muted"/>}
                    <h2 className="text-2xl font-extrabold">
                        {post.title}
                    </h2>
                    {post.description && ( 
                        <p className="text-muted-foreground">{post.description}</p>
                    )}
                    {post.date && (
                        <p className="text-sm text-muted-foreground">
                            {format(post.date, "yyyy/MM/dd")}
                        </p>
                    )}
                </article>
            ))}
        </div>
    );
}