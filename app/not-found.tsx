import { Button } from "@/components/ui/button";
import { CornerUpLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-4 text-lg text-muted-foreground text-center">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="mt-8">
        <Button>
          <CornerUpLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
