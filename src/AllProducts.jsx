import React,{useContext} from 'react'
import { myContext } from './Products.jsx'

const AllProducts = () => {
  const data = useContext(myContext)
  console.log(data);
  
  return (
    <div>
      {data && data.map((e,i) => (
        <div key={e.id}>
            <img src={e.image} alt="" />
            <h2>{e.title}</h2>
            <p>{e.price}</p>
        </div>
      ))}
    </div>
  )
}

export default AllProducts
