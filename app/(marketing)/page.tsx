import Link from "next/link";

export default function IndexPage() {
    return (
        <>
            <section className="pt-6 md:pt-10 lg:py-32 pb-8">
                <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem]">
                    <Link href="https://x.com/SI_Monxy">Xをフォローする</Link>
                    <h1>Shimon's Tech Blog</h1>
                    <p>ソフトウェアエンジニア 史門のテックブログです。</p>
                </div>
            </section>
        </>
    )
}