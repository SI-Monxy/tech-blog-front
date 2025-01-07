import { getSortedPostsData } from "@/lib/posts";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from 'remark';
import remarkHtml from 'remark-html';

// 動的なパラメータの型定義
type Props = {
    params: {
        id: string;
    };
};

// メインのページコンポーネント
export default async function Post({ params }: Props) {
    const postData = await getPost(params.id);
    
    return (
        <div>
        <h1>{postData.title}</h1>
        <small>{postData.date}</small>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
    const fullPath = path.join(process.cwd(), 'src/content', `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

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

