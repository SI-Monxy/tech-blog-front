import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function SiteFooter() {
    return (
        <footer>
            <div className="container mx-auto py-6 h-24">
                <p className="text-center text-sm text-gray-600">© 2025 Shimon's Tech Blog</p>
                <p className="text-center text-sm text-gray-600 pt-2">
                    Built by {""}
                    <Link href={siteConfig.links.x} target="_blank" rel="noreferrer" className="text-sky-700 underline underline-offset-4">Shimon Iwata</Link>
                    . Hosted on {""}
                    <Link href={siteConfig.links.vercel} target="_blank" rel="noreferrer" className="text-sky-700 underline underline-offset-4">Vercel</Link>
                </p>
            </div>
        </footer>
    )
}