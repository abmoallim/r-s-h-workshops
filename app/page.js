import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

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
          <Button variant="outline">Click me</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
