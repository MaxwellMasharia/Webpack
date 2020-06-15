import getIds from "./utils/getIds";
import "./style.css";

const input = document.querySelector(`input[type="number"]`);
const btn = document.querySelector("button");

let val = 0;
input.addEventListener("change", () => {
  val = Math.abs(input.value);
});

btn.addEventListener("click", () => {
  console.log("Ids", getIds(val));
  input.value = 0;
  val = 0;
});

// alert("Hey Bros ... ");
