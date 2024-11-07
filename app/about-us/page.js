import Image from "next/image";
import { getAllWorks } from "../_services/api_works";
import styled from "./page.module.css";

export const metadata = {
  title: "درباره ما",
};

async function Page() {
  const works = await getAllWorks();

  return (
    <div className={styled.container}>
      <Image
        src="/./images/coffee-cup.png"
        width={100}
        height={100}
        alt="coffee"
      />
      <h3>درباره ما</h3>
      <p>
        با سلام و احترام، به وب‌سایت نِکست کافه، طراحی و توسعه یافته توسط
        امیرحسین شکری، برنامه‌نویس فرانت‌اند، خوش آمدید. این وب‌سایت به‌عنوان
        نمونه‌ای برای نمایش توانایی‌ها و تسلط بنده در استفاده از فریمورک قدرتمند
        Next.js ساخته شده است. در نِکست کافه تلاش کرده‌ام تا با به‌کارگیری
        جدیدترین تکنولوژی‌ها و رعایت اصول بهینه‌سازی، تجربه کاربری منحصربه‌فردی
        را برای شما به ارمغان بیاورم. امیدوارم از بازدید از این وب‌سایت لذت
        ببرید و برای شما تجربه‌ای دلپذیر و مفید باشد. از بازخوردهای شما استقبال
        می‌کنم.
      </p>
      <h3>ساعت کاری</h3>
      <ul className={styled.container_works}>
        {works.map((work) => (
          <li key={work.id}>
            <span>{work.day}</span>
            <div className={styled.line}></div>
            <span>
              {work.start}تا {work.end}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
