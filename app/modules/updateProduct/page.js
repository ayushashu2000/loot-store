"use client"
import React, { useState } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
const page = () => {
  const [title, settitle] = useState('')
  const [price, setprice] = useState(0)
  const [description, setdescription] = useState('')
  const [image, setimage] = useState('')
  const [category, setcategory] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct();
  }
  const addProduct = async () => {
    const response = await fetch('https://fakestoreapi.com/products', {
      method: "POST",
      body: JSON.stringify(
        {
          title: { title },
          price: { price },
          description: { description },
          image: { image },
          category: { category }
        }
      )
    })
    const data = await response.json()
    alert('Product added with id '+data.id)
  }
  return (
    <>
      <Header/>
      <div className="bg-gray-100 flex bg-local mt-10">
        <div className="bg-gray-100 mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">
          <form>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="company">
                    Title*
                  </label>
                  <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder="title" value={title} onChange={(e) => settitle(e.target.value)} />
                  <div>
                    <span className="text-red-500 text-xs italic">
                      Please fill out this field.
                    </span>
                  </div>
                </div>
                <div className="md:w-1/2 px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="Title">
                    Price*
                  </label>
                  <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="title" type="text" placeholder="$" value={price} onChange={(e) => setprice(e.target.value)} />
                </div>
              </div>
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-full px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="application-link">
                    Description*
                  </label>
                  <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="application-link" type="text" placeholder="Description" value={description} onChange={(e) => setdescription(e.target.value)} />
                </div>
              </div>
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-full px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="application-link">
                    Category*
                  </label>
                  <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="application-link" type="text" placeholder="Category" value={category} onChange={(e) => setcategory(e.target.value)} />
                </div>
              </div>
              <div className="-mx-3 md:flex mb-6">
                <div className="md:w-full px-3">
                  <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" for="application-link">
                    Image Link*
                  </label>
                  <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="application-link" type="text" placeholder="http://...." value={image} onChange={(e) => setimage(e.target.value)} />
                </div>
              </div>
              <div className="-mx-3 md:flex mt-2">
                <div className="md:w-full px-3">
                  <button className="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full" onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default page