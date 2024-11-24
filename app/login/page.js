import styled from "./page.module.css";
import Form from "../_components/Form/Form";
import { actionSignIn } from "../_lib/action";

function Page() {
  return (
    <div className={styled.container}>
      <Form />
      <form action={actionSignIn} className={styled.form}>
        <button className={styled.btn} type="submit">
          google
        </button>
      </form>
    </div>
  );
}

export default Page;
