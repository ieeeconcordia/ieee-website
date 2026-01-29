import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Sponsorship() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/contact#sponsorship");
  }, [router]);

  return null;
}
