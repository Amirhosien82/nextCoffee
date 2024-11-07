import Image from "next/image";
import styled from "./ItemMenu.module.css";
function ItemMenu({ item }) {
  const { image, menu, title, id } = item;
  return (
    <div className={styled.container}>
      <Image src={image} width={150} height={150} alt="logo" />
      <h3 className={styled.title}>{title}</h3>
      <ul className={styled.container_menu}>
        {menu.map((item) => (
          <li key={item.id}>
            <div className={styled.container_name}>
              <h3>{item.name}</h3>
              <div className={styled.line}></div>
              <h3>{item.price}</h3>
            </div>
            <p>{item.discription}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemMenu;
