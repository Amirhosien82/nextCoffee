import Slider from "./_components/Slider/Slider";
import styled from "./page.module.css";
import ShopCoffe from "./_components/ShopCoffe/ShopCoffee";

function Page() {
  return (
    <div>
      <div className={styled.container_slider}>
        <Slider />
      </div>
      <ShopCoffe />
    </div>
  );
}

export default Page;
