import React from 'react';
import Product from './Product';
import Pagination from '../FriendsPage/Pagination';
import img1 from "../../asserts/product.png";

const Products = () => {
    return (
        <div className='bg-[FFFAF5] md:mt-[100px] place-items-center'>
           <div className="ProductList text-center text-[#302f51] text-[40px] font-bold md:mb-[52px]">Product List</div>


      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      </main>

      <div className='py-[50px]'>
      <Pagination/>
      </div>
        </div>
    );
};

export default Products;