import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFDD0] flex items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Day 1</CardTitle>
          <CardDescription>Rebuilding Somalia Hackathon</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Kickoff and team formation for the 3-day hackathon focused on innovative solutions for Somalia&apos;s reconstruction.</p>
        </CardContent>
        <CardFooter>
          <Link href="https://highfalutin-abrosaurus-b49.notion.site/Rebuilding-Somalia-Hackathon-110dc209fc4280e99b4ce036b818e699?pvs=74" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">Show Details</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
