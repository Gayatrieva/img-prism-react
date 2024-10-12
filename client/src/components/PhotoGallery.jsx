// import { FaShoppingCart } from "react-icons/fa";

import { ImageCard } from "./ImageCard";

// for the heart section
const PhotoGallery = () => {
  return (
    <div className="my-20 bg-white flex flex-col justify-center items-center">
      <h3 className="text-3xl font-semibold my-14">Photos</h3>
      {/* All my pjos will be inside this div */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 bg-20">
        {/* image card */}
        
        <ImageCard
       title="The Beach"
       author="coder"
       img="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg"
       price= "price: 10"
       icon1=" yaha pr icons add krna ha react js ki librabry se own"/>
       {/* icon2=" yaha pr icons add krna ha react js ki librabry se own"/> */}
   
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 bg-20">
        {/* image card */}
        
        <ImageCard
       title="The Beach"
       author="coder"
       img="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg"
       price= "price: 10"
       icon1=" yaha pr icons add krna ha react js ki librabry se own"/>
       {/* icon2=" yaha pr icons add krna ha react js ki librabry se own"/> */}
   
      </div>
      
    </div>
    
    
  );
};

export default PhotoGallery;
