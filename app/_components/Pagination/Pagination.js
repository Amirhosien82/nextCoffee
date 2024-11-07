"use client";

import { useRouter, useSearchParams } from "next/navigation";
import styled from "./Pagimation.module.css";
function Pagination({ count = 40 }) {
  const length = Math.ceil(count / 9);
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const search = new URLSearchParams(searchParams.toString());

  if (length === 1) return null;

  return (
    <div className={styled.container}>
      {Array.from({ length }, (_, i) => i + 1)
        .slice(page === 1 ? 0 : page - 2, page === 1 ? 3 : page + 1)
        .map((number) => (
          <button
            key={number}
            onClick={() => {
              search.set("page", number);
              router.replace(`?${search.toString()}`);
            }}
            className={page === number && styled.active}
          >
            {number}
          </button>
        ))}
    </div>
  );
}

export default Pagination;
