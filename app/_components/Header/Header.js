"use client";
import Image from "next/image";
import styled from "./Header.module.css";
import Link from "next/link";
import {
  HiMagnifyingGlass,
  HiOutlineBars3,
  HiOutlineHeart,
  HiOutlineShoppingBag,
  HiOutlineXMark,
} from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useApi } from "@/app/_lib/ContextApi";
import { getUser } from "@/app/_services/api_users";

function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("");
  const [user, setUser] = useState({});

  const { carts } = useApi();
  const { push } = useRouter();
  const pathName = usePathname();
  useEffect(() => {
    (async () => {
      const u = await getUser();
      setUser(u);
    })();
  }, []);

  return (
    <div className={styled.container}>
      <Link href="/">
        <Image
          src="/./images/icon.png"
          width={35}
          height={35}
          alt="logo cafe"
        />
      </Link>

      <button
        className={styled.btn_list}
        onClick={() => {
          setIsOpen(true);
        }}
        type="button"
      >
        <HiOutlineBars3 size={35} />
      </button>

      <div
        className={styled.menus_offcanvas}
        style={isOpen ? { right: 0 } : { right: "-100%" }}
      >
        <div className={styled.menu_links_offcanvas}>
          <Link
            href="/"
            className={`${styled.item_link_offcanvas} ${
              pathname === "/" && styled.active
            }`}
          >
            صفحه اصلی
          </Link>
          <Link
            href="/shop"
            className={`${styled.item_link_offcanvas} ${
              pathname === "/shop" && styled.active
            }`}
          >
            فروشگاه
          </Link>
          <Link
            href="/menu"
            className={`${styled.item_link_offcanvas} ${
              pathname === "/menu" && styled.active
            }`}
          >
            منو
          </Link>
          <Link
            href="/about-us"
            className={`${styled.item_link_offcanvas} ${
              pathname === "/about-us" && styled.active
            }`}
          >
            درباره ما
          </Link>
          <Link
            href="/contact-us"
            className={`${styled.item_link_offcanvas} ${
              pathname === "/contact-us" && styled.active
            }`}
          >
            تماس با ما
          </Link>

          <button
            type="button"
            style={{ marginTop: "1rem" }}
            className={`${styled.btn_list} ${styled.btn_close}`}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <HiOutlineXMark size={40} />
          </button>
        </div>
      </div>

      <div className={styled.container_menus}>
        <div className={styled.menu_links}>
          <Link
            href="/"
            className={`${styled.item_link} ${
              pathname === "/" && styled.active
            }`}
          >
            صفحه اصلی
          </Link>
          <Link
            href="/shop"
            className={`${styled.item_link} ${
              pathname === "/shop" && styled.active
            }`}
          >
            فروشگاه
          </Link>
          <Link
            href="/menu"
            className={`${styled.item_link} ${
              pathname === "/menu" && styled.active
            }`}
          >
            منو
          </Link>
          <Link
            href="/about-us"
            className={`${styled.item_link} ${
              pathname === "/about-us" && styled.active
            }`}
          >
            درباره ما
          </Link>
          <Link
            href="/contact-us"
            className={`${styled.item_link} ${
              pathname === "/contact-us" && styled.active
            }`}
          >
            تماس با ما
          </Link>
        </div>

        <div className={styled.container_btns}>
          <button
            className={`${styled.btn_list} ${styled.btn_md}`}
            onClick={() => {
              setIsOpen(true);
            }}
            type="button"
          >
            <HiOutlineBars3 size={35} />
          </button>
          <div className={styled.containerInput}>
            <input
              type="text"
              className={styled.input_search}
              placeholder="جستجو..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const searchParams = new URLSearchParams();
                  if (text) searchParams.set("name", text);
                  push(`/shop?${searchParams.toString()}`);
                }
              }}
            />
            <button
              type="button"
              onClick={() => {
                const searchParams = new URLSearchParams();
                if (text) searchParams.set("name", text);
                push(`/shop?${searchParams.toString()}`);
              }}
              className={styled.btn_search}
            >
              <HiMagnifyingGlass size={20} />
            </button>
            {text && (
              <button
                type="button"
                style={{ right: "12px", left: "initial" }}
                onClick={() => {
                  setText("");
                  if (pathName === "/shop") {
                    const searchParams = new URLSearchParams();
                    push(`/shop?${searchParams.toString()}`);
                  }
                }}
                className={styled.btn_search}
              >
                <IoMdClose size={20} />
              </button>
            )}
          </div>
          <Link
            href="/cart"
            className={`${styled.btn_header} ${styled.btnBadge}`}
          >
            <HiOutlineShoppingBag size={30} />
            {carts.length > 0 && (
              <span className={styled.badge}>{carts.length}</span>
            )}
          </Link>
          <Link href="/wishlist" className={styled.btn_header}>
            <HiOutlineHeart size={30} />
          </Link>
          {user?.aud ? (
            <div className={styled.btn_header}>
             
            </div>
          ) : (
            <Link href="/login" className={styled.btn_header}>
              ورود/ثبت نام
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
