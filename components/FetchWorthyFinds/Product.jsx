import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import product from "../../asserts/product.png";
import { FaExternalLinkAlt } from 'react-icons/fa';

const Product = () => {
  return (
    <div className="max-w-[387px] rounded overflow-hidden shadow-xl bg-white">
      {/* Product Image */}
      <div className="relative">
        <Image
          src={product} // Replace with your actual image path
          alt="Dog Food"
          width={400}
          height={500}
          className="object-cover"
        />

        {/* Black overlay on the left side */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* Text and Price over the image */}
        <div className="absolute bottom-0 left-0 m-4 text-white z-10">
          <h3 className="text-[40px] font-bold">Dog Food</h3>
          <p className="text-[24px]">$160.00</p>
        </div>

        {/* External Link Icon */}
        <div className="absolute bottom-0 right-0 m-4 p-2  rounded-full  z-10">
        <FaExternalLinkAlt className="text-white text-3xl"  />
        </div>
      </div>
    </div>
  );
};

export default Product;
