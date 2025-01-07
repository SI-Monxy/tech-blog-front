import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content");

type Post = {
    id: string;
    date: string;
    title: string;
  // その他必要なフィールド
}
// 記事一覧を取得する関数
export function getSortedPostsData(): Post[] {
  // content フォルダ内のファイル名を取得
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // 拡張子を除いたファイル名を取得
        const id = fileName.replace(/\.md$/, "");

        // ファイル内容を読み込む
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // メタデータを解析
        const matterResult = matter(fileContents);
        const date = matterResult.data["date"];
        const title = matterResult.data["title"];

        return {
            id,
            date,
            title,
        };
    });

  // 日付でソート
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}
