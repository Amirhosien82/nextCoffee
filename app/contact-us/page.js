import { HiMiniPhone } from "react-icons/hi2";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { getContact } from "../_services/api_contact";
import styled from "./page.module.css";
import Leaflet from "../_components/Leaflet/Leaflet";

export const metadata = { title: "تماس با ما" };

async function Page() {
  const { phone, github, linkedin, address, position } = await getContact();

  return (
    <div className={styled.container}>
      <div className={styled.contacts}>
        <div className={styled.container_contacts}>
          <h3 className={styled.title}>با ما در تماس باشید</h3>
          <div className={styled.item}>
            <div className={styled.container_logo}>
              <FaLinkedin size={35} />
            </div>
            <div className={styled.discription}>
              <h3>لینکدین</h3>
              <a href={linkedin}>{linkedin.split("/")[4]}</a>
            </div>
          </div>
          <div className={styled.item}>
            <div className={styled.container_logo}>
              <FaGithub size={35} />
            </div>
            <div className={styled.discription}>
              <h3>گیت هاب</h3>
              <a href={github}>{github.split("/")[3]}</a>
            </div>
          </div>
          <div className={styled.item}>
            <div className={styled.container_logo}>
              <HiMiniPhone size={35} />
            </div>
            <div className={styled.discription}>
              <h3>شماره تماس</h3>
              <a href={`tel:+98${phone}`}>{phone}</a>
            </div>
          </div>
          <div className={styled.item}>
            <div className={styled.container_logo}>
              <FaMapMarkerAlt size={35} />
            </div>
            <div className={styled.discription}>
              <h3>آدرس</h3>
              <p>{address}</p>
            </div>
          </div>
        </div>
        <div className={styled.container_leaflet}>
          <Leaflet position={position} />
        </div>
      </div>
    </div>
  );
}

export default Page;
