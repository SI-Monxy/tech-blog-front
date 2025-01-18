import Link from "next/link";
// import { ModeToggle } from "@/components/mode-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 pl-10 items-center">
        <Link
          href="/"
          className="font-bold hover:text-primary transition-colors"
        >
          Shimon&apos;s Tech Blog
        </Link>
        {/* <div className="flex flex-1 items-center justify-end">
          <ModeToggle />
        </div> */}
      </div>
    </header>
  );
}
