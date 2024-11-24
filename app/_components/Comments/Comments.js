"use client";

import { useEffect, useState } from "react";
import styled from "./Comments.module.css";
import { getUser } from "@/app/_services/api_users";
import { addComment } from "@/app/_lib/action";
import { useFormStatus } from "react-dom";
function Comments({ caption, comments, id }) {
  const [show, setShow] = useState("caption");
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      const u = await getUser();
      setUser(u);
    })();
  }, []);
  return (
    <div>
      <div className={styled.btngroup}>
        <button
          disabled={show === "caption"}
          type="button"
          onClick={() => {
            setShow("caption");
          }}
        >
          توضیحات
        </button>
        <button
          disabled={show === "comment"}
          type="button"
          onClick={() => {
            setShow("comment");
          }}
        >
          نظرات
        </button>
      </div>
      <div className={styled.content}>
        {show === "caption" ? (
          <p className={styled.caption}>{caption}</p>
        ) : (
          <div>
            <h3 className={styled.contentHeader}>دیدگاه ها</h3>
            {comments.length > 0 ? (
              <>
                {comments.map((item, index) => (
                  <div key={index} className={styled.comment}>
                    <h3>{item.name}</h3>
                    <h3>:</h3>
                    <p className={styled.text_comment}>{item.comment}</p>
                  </div>
                ))}
              </>
            ) : (
              <>
                <h3 className={styled.empity}>
                  هیچ دیدگاهی برای این محصول نوشته نشده است.
                </h3>
              </>
            )}
            {user.aud === "authenticated" ? (
              <form className={styled.form} action={addComment}>
                <input
                  type="hidden"
                  name="name"
                  value={user.user_metadata.fullName}
                />
                <input type="hidden" name="id" value={id} />
                <input
                  type="hidden"
                  name="comments"
                  value={JSON.stringify(comments)}
                />

                <Button />
              </form>
            ) : (
              <h3 className={styled.caption}>
                فقط مشتریانی که وارد سیستم شده اند میتوانند برای این محصول
                دیدگاه ارسال کنند
              </h3>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function Button() {
  const { pending } = useFormStatus();

  return (
    <>
      <textarea disabled={pending} name="comment"></textarea>
      <button type="submit" disabled={pending} className={styled.btn}>
        ثبت نظر
      </button>
    </>
  );
}

export default Comments;
