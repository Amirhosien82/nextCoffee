import Image from "next/image";
import Link from "next/link";
import styled from "./ShopCoffee.module.css";
import HoverImg from "../hoverImg/HoverImg";
function ShopCoffe() {
  return (
    <>
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

            <Link href="/shop" className={`${styled.btn} ${styled.btn_three}`}>
              <span>خرید آنلاین</span>
            </Link>
          </div>
        </div>
      </div>
      <div className={styled.container_offer}>
        <Image src="/./images/espresso-maker.jpg" fill alt="backgroung-image" />
        <div className={styled.overlay}></div>
        <div className={styled.container_offer_content}>
          <h3>چه چیزی را برای شما پیشنهاد می دهیم؟</h3>
          <p>
            قهوه بسیار مهم است. اگر شما محصولات با کیفیت را می خواهید، کافه صبا
            آن را در محیطی دلنشین به شما هدیه می کند.
          </p>
        </div>
        <HoverImg image="/./images/cups-of-coffee.jpg" />
      </div>
    </>
  );
}

export default ShopCoffe;
