import { getSortedPostsData } from "@/lib/posts";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import { markdownToHtml } from "@/lib/markdownToHtml";
import "highlight.js/styles/github-dark.css"; // ダークテーマ用のスタイル

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
    <div className="min-h-screen bg-[#0b1121]"> {/* 背景色を強制的に設定 */}
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-2 text-white">{post.title}</h1>
          <div className="text-gray-400 mb-8">{post.date}</div>
          <div 
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: content }} 
          />
        </div>
      </article>
    </div>
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
