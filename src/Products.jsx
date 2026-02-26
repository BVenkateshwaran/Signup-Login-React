import React,{useEffect} from 'react'

const Products = () => {
    useEffect(()=>{
        async function abc()
        {
            let res = await fetch('https://fakestoreapi.com/products');
            let data = await res.json();
            console.log(data);
            
        }
        abc()
    },[])
    return (
        <div>
            {}
        </div>
    )
}

export default Products
