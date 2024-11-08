"use client";
import { useState } from "react";
import styled from "./Counter.module.css";
function Counter({ number, handler, maxCount }) {
  const [count, setCount] = useState(number);
  return (
    <div className={styled.counter}>
      <button
        type="button"
        onClick={() => {
          setCount((c) => {
            const newCount = c - 1;
            handler(newCount);
            return newCount;
          });
        }}
        className={styled.button}
      >
        -
      </button>
      <h3 className={styled.count}>{count}</h3>
      <button
        type="button"
        onClick={() => {
          setCount((c) => {
            const newCount = c + 1;
            if (newCount > maxCount) return c;
            handler(newCount);
            return newCount;
          });
        }}
        className={styled.button}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
