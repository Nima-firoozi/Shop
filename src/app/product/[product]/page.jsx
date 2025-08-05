import React from "react";
import ProductPage from "@/app/components/modules/product/ProductPage";
import { notFound } from "next/navigation";
export async function generateStaticParams() {
  const res = await fetch(
    `https://68875657071f195ca9804edb.mockapi.io/products`
  );
  const data = await res.json();
  const params = data.map((val) => ({ productId: String(val.id) }));
  return params;
}

async function getData(id) {
  const res = await fetch(
    `https://68875657071f195ca9804edb.mockapi.io/products/${id}`
  );
  const data = await res.json();
  return data;
}

export default async function page({ params }) {
  const id = await params.product;
  const validUrl = [];
  for (let i = 1; i <= 10; i++) {
    validUrl.push(`product-${i}`);
  }
  if (validUrl.includes(id)) {
    const data = await getData(+id[8]);
    return <ProductPage data={data} />;
  } else {
    return notFound();
  }
}
