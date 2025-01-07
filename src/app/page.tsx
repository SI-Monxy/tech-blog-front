import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

export default async function Home() {
  const allPostsData = await getSortedPostsData();
  return (
    <div>
      <h1>ブログ一覧</h1>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/${id}`}>
              {title}
            </Link>
            <br />
            <small>{date}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
