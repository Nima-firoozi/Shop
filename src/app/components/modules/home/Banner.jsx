import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
      <Image
        src={"/banner.webp"}
        style={{ width: "100%", objectFit: "cover", height: "auto" }}
        width="10000"
        height="10000"
        alt="bonmanooooooo"
      />
  );
}

