import { Button } from "@/shared/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <Button>
      <Link href={"/profile"}>Профиль</Link>
    </Button>
  );
}
