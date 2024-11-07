import ItemMenu from "../_components/ItemMenu/ItemMenu";

import {
  getEspresso,
  getIceCream,
  getSamuti,
  getStylishBar,
} from "../_services/api_menu";
import styled from "./page.module.css";

export const metadata={title:"منو"}



async function Page() {
  const [espresso, iceCream, samuti, stylishBar] = await Promise.all([
    getEspresso(),
    getIceCream(),
    getSamuti(),
    getStylishBar(),
  ]);

  const data = [
    {
      id: 0,
      title: "اسپرسو بار",
      image: "/./images/coffee-cup.png",
      menu: espresso,
    },
    { id: 1, title: "بستنی", image: "/./images/ice-cream.png", menu: iceCream },
    {
      id: 2,
      title: "ماکتل و اسموتی",
      image: "/./images/lemonade.png",
      menu: samuti,
    },
    {
      id: 3,
      title: "شیک بار",
      image: "/./images/coffee-shake.png",
      menu: stylishBar,
    },
  ];

  return (
    <div className={styled.container}>
      {data.map((item) => (
        <ItemMenu key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Page;
