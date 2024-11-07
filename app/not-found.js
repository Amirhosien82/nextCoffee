import Link from "next/link";
import styled from "./not-found.module.css";

export const metadata = { title: "برگه پیدا نشد" };

function NotFound() {
  return (
    <div className={styled.container}>
      <h3>404</h3>
      <Link href="/">بازگشت به صفحه اصلی</Link>
    </div>
  );
}

export default NotFound;
