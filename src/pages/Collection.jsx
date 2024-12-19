import React, { useContext, useEffect, useState } from 'react';
import {ShopContext} from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';


const Collection = () => {
  const {products, search, showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item=> item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item!== e.target.value));
    }else{
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();
    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }
    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }
    setFilterProducts(productsCopy);
  }

  const sortProducts = () => {
    let fpCopy = filterProducts.slice();
    switch(sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(()=>{
    applyFilter();
  },[category, subCategory, search, showSearch])

  useEffect(()=>{
    sortProducts();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter options */}
      <div className="min-w-60">
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>
        <img src={assets.dropdown_icon} alt="dropdown_icon" className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} />
        {/* category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>類別</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'男性'} onChange={toggleCategory} /> 男性
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'女性'} onChange={toggleCategory} /> 女性
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'孩童'} onChange={toggleCategory} /> 孩童
            </p>
          </div>
        </div>

        {/* subcategory filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>類別</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'外套'} onChange={toggleSubCategory} /> 外套
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'套裝'} onChange={toggleSubCategory} /> 套裝
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'上衣'} onChange={toggleSubCategory} /> 上衣
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'長褲'} onChange={toggleSubCategory} /> 長褲
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'洋裝'} onChange={toggleSubCategory} /> 洋裝
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'短褲'} onChange={toggleSubCategory} /> 短褲
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className='w-3' value={'內衣'} onChange={toggleSubCategory} /> 內衣
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex-1">

        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'全部'} text2={'商品'} />
          {/* Product sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by : Relevant</option>
            <option value="low-high">Sort by : low to high</option>
            <option value="high-low">Sort by : high to low</option>
          </select>
        </div>

        {/* map products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
            filterProducts.map((item, index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Collection