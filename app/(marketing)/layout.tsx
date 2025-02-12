import Link from "next/link";

export default function MarketingLayout({
  children
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <header className="container z-40 bg-background">
                <div className="h-20 py-6">
                    <nav>
                        <Link href={"/login"}>ログイン</Link>
                    </nav>
                </div>
            </header>
            <main>{children}</main>
        </div>
    )
};