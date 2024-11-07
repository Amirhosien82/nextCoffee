"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import styled from "./Filter.module.css";
function FilterGroups({ groups }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("group")) || 0;
  const search = new URLSearchParams(searchParams.toString());
  return (
    <div className={styled.container}>
      <h3 className={styled.text}>دسته‌ بندی</h3>
      <div className={styled.containerGroup}>
        {groups.map((group) => (
          <button
            key={group.id}
            className={`${styled.itemGroup} ${
              page === group.id && styled.active
            }`}
            onClick={() => {
              search.set("group", group.id);
              router.replace(`?${search.toString()}`);
            }}
          >
            {group.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterGroups;
