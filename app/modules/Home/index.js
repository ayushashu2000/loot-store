"use client"






import React, { useEffect, useState } from 'react'
import Products from '../../components/Products'
import FeatureCard from '../../components/FeatureCard'
import Stats from '../../components/StatCard'
import Hero from '../../components/Hero'

const Home = () => {
    const [products, setproducts] = useState([])
    useEffect(() => {
    const fetchProducts = async ()=>{
        const response = await fetch('https://fakestoreapi.com/products?limit=12')
        const data= await response.json()
        setproducts(data)
    }
    fetchProducts()
    }, [])
    
    return (
        <>
            <Hero/>
            <div className="flex flex-col text-center w-full mt-20">
                <h2 className="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">POPULAR CATEGORY</h1>
            </div>
            {
                products.length > 0 ?
                <Products products={products}/>
                :
                <div className='text-center mt-10'>Loading...............</div>
            }
            <Products/>
            <FeatureCard/>
            <Stats/>
        </>
    )
}

export default Home