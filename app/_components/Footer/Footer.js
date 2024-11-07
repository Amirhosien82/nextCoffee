"use client";
import Link from "next/link";
import styled from "./Footer.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Footer() {
  const pathname = usePathname();
  return (
    <div className={styled.container}>
      <div className={styled.content}>
        <div className={styled.item}>
          <h3>آدرس</h3>
          <p>کردستان - سنندج آبیدر</p>
        </div>
        <div className={styled.item}>
          <h3>دسترسی سریع</h3>
          <div className={styled.container_link}>
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
        </div>
        <div className={styled.item}>
          <h3>درباره ما</h3>
          <p className={styled.text_about}>
            با سلام و احترام، به وب‌سایت نِکست کافه، طراحی و توسعه یافته توسط
            امیرحسین شکری، برنامه‌نویس فرانت‌اند، خوش آمدید. این وب‌سایت
            به‌عنوان نمونه‌ای برای نمایش توانایی‌ها و تسلط بنده...
            <Link href="about-us" className={styled.about}>
              ادامه درباره
            </Link>
          </p>
        </div>
        <div className={styled.item}>
          <h3>اعتماد شما</h3>
          <Image src="/./images/logo.png" width={100} height={100} alt="logo" />
        </div>
      </div>
      <h3 className={styled.text}>
        تمامی حقوق این سایت متعلق به نکست کافه می باشد
      </h3>
    </div>
  );
}

export default Footer;
