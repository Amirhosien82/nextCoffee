import styled from "./page.module.css";
import { PiPasswordThin, PiUser, PiUserBold } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";
import Form from "../_components/Form/Form";
import { signIn } from "../auth";
function Page() {
  return (
    <div className={styled.container}>
      <Form />
      <form action={action} className={styled.form}>
        <button className={styled.btn} type="submit">
          google
        </button>
      </form>
    </div>
  );
}

async function action() {
  "use server";
  await signIn("google");
}

export default Page;
