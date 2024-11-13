import Link from "next/link";
import styled from "./Empity.module.css";
function Empity({ text }) {
  return (
    <div className={styled.container_empity}>
      <h3 className={styled.text_empity}>{text}</h3>
      <Link className={styled.btn_shop} href="/shop">
        بازگشت به فروشگاه
      </Link>
    </div>
  );
}

export default Empity;
