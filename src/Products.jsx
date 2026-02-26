import React,{useEffect,useState, createContext} from 'react'
import AllProducts from './AllProducts';
export let myContext = createContext()
const Products = () => {
    const [state,setState] = useState(null)
    useEffect(()=>{
        async function abc()
        {
            let res = await fetch('https://fakestoreapi.com/products');
            let data = await res.json();
            console.log(data);
            setState(data)
        }
        abc()
    },[])
    return (
        <div>
            <myContext.Provider value={state}>
                <AllProducts></AllProducts>
            </myContext.Provider>

        </div>
    )
}

export default Products
