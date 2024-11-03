import Image from "next/image";
import Link from "next/link";
import styled from "./ShopCoffee.module.css";
function ShopCoffe() {
  return (
    <div className={styled.shop_cofee}>
      <div className={styled.coffee}>
        <Image fill src="/./images/coffee.jpg" alt="coffee" />
        <div className={styled.caption}>
          <Link href="" className={styled.link_item}>
            پودر قهوه
          </Link>
        </div>
      </div>
      <div className={styled.cold}>
        <Image fill src="/./images/cold.jpg" alt="coffee" />
        <div className={styled.caption}>
          <Link href="" className={styled.link_item}>
            بارسرد
          </Link>
        </div>
      </div>
      <div className={styled.hot}>
        <Image fill src="/./images/hot.jpeg" alt="coffee" />
        <div className={styled.caption}>
          <Link href="" className={styled.link_item}>
            بارگرم
          </Link>
        </div>
      </div>
      <div className={styled.store}>
        <div className={styled.container_espresso}>
          <Image src="/./images/espresso.jpg" alt="espresso" fill />
        </div>
        <div className={styled.container_espresso_caption}>
          <h3>فروشگاه نکست کافه</h3>
          <Image
            src="/./images/coffee-beans.png"
            alt="coffee-beans"
            width={45}
            height={45}
          />
          <p>
            همین حالا کلی محصول با کیفیت رو از فروشگاه ما با بهترین کیفیت و
            مناسب ترین قیمت خریداری کن
          </p>

          <Link href="" className={`${styled.btn} ${styled.btn_three}`}>
            <span>خرید آنلاین</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShopCoffe;
