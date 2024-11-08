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
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useApi } from "@/app/_context-api/ContextApi";

function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { carts } = useApi();

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
            />
            <button type="button" className={styled.btn_search}>
              <HiMagnifyingGlass size={20} />
            </button>
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
          <Link href="/login" className={styled.btn_header}>
            ورود/ثبت نام
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
