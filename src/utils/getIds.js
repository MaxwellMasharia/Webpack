import { v4 as getId } from "uuid";

export default (num) => {
  const array = [];
  for (let i = 0; i < num; i++) {
    array.push(getId());
  }
  return array;
};
