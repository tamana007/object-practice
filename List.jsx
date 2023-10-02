import React from "react";
// import Data, { list } from './Data'
import { list } from "./Data";
// import Obj from "./person";

// import {list} from './Data'
// console.log(list);
function List (){
  return(
    <h2>
    {
      list.map((obj)=>{
        console.log(obj);
        return(<div></div> )
        
      })
      
      
    }
   
    </h2>
  )
}

// function List() {
//   return (
//     <div>
//       {list.map((item) => {
//         return <div>{item}</div>;
//       })}
//     </div>
//   );
// }

export default List;
