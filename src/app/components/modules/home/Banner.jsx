import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <Link href="/shop" style={{ width: "100%", height: "auto" }}>
      <Image
        src={"/banner.webp"}
        style={{ width: "100%", objectFit: "cover", height: "auto" }}
        width="10000"
        height="10000"
        alt="bonmanooooooo"
      />
    </Link>
  );
}
