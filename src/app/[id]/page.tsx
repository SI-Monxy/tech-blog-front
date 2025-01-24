import { getSortedPostsData } from "@/lib/posts";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import { markdownToHtml } from "@/lib/markdownToHtml";
import "highlight.js/styles/github-dark.css"; // ダークテーマ用のスタイル
import { BackButton } from "@/components/backButton";

// 動的なパラメータの型定義
type Props = {
  params: {
    id: string;
  };
};

// メインのページコンポーネント
export default async function PostPage({ params }: Props) {
  const resolvedParams = await Promise.resolve(params);
  const id = resolvedParams.id;

  const post = await getPost(id);
  const content = await markdownToHtml(post.contentHtml);

  return (
    <div className="min-h-screen bg-background">
      <article className="container max-w-3xl mx-auto px-4 py-12">
        <div className="mb-8">
          <BackButton />
        </div>

        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            {post.title}
          </h1>
          <time className="text-sm text-muted-foreground mt-2 block">
            {post.date}
          </time>
        </header>

        <div
          className="markdown-content prose dark:prose-invert max-w-none
          prose-pre:border-border
          prose-pre:bg-card
          prose-code:bg-muted
          prose-code:text-accent-foreground
          prose-headings:text-foreground
          prose-p:text-foreground/90"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </article>
    </div>
    // <article className="container max-w-4xl mx-auto py-8">
    //     <BackButton />
    //     <header className="mb-8">
    //         <h1 className="scroll-m-20 text-4xl font-bold tracking-tight mb-2">
    //         {post.title}
    //         </h1>
    //         <time className="text-sm text-muted-foreground">{post.date}</time>
    //     </header>
    //     <div
    //         className="prose prose-slate dark:prose-invert max-w-none"
    //         dangerouslySetInnerHTML={{ __html: content }}
    //     />
    // </article>
  );
}

// 動的ルートの生成
export async function generateStaticParams() {
  const allPosts = await getSortedPostsData();
  return allPosts.map((post) => ({
    id: post.id,
  }));
}

// 投稿データを取得する関数
async function getPost(id: string) {
  const fullPath = path.join(process.cwd(), "src/content", `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);
  const date = matterResult.data["date"];
  const title = matterResult.data["title"];

  // remark の使用方法を修正
  const processedContent = await remark()
    .use(remarkHtml)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    date,
    title,
    contentHtml,
    ...matterResult.data,
  };
}
