import React from "react";
// import Data, { list } from './Data'
import { list } from "./Data";
// import {list} from './Data'
console.log(list);

function List() {
  return (
    <div>
      {list.map((item) => {
        return <div>{item}</div>;
      })}
    </div>
  );
}

export default List;
