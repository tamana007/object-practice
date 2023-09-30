import React from 'react'
// import Data, { list } from './Data'
import { list } from './Data'
// import {list} from './Data'

function List() {
 list.map((item)=>{
  return(
    <div>{item}</div>
  )
 })
}

export default List