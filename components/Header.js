import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-center space-x-4">
          <Link href="/">
            <Button variant="ghost">Ship Faster</Button>
          </Link>
          <Link href="/build-with-llm-apis">
            <Button variant="ghost">Build with LLM APIs</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}