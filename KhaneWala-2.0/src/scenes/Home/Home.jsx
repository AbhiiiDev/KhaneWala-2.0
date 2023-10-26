import React from "react";
import CircleCard from "../../components/CircleCard";
import { Link } from "react-router-dom";
import ItemSection from './ItemSection.jsx';

const image = [
  {
    pizza:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
    starter:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
    biryani:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png",
  },
];

const Home = () => {
  return (
    <div className="">

      <div className="m-3 mx-10 font-extrabold text-3xl">
        What's on your mind ?
        {image.map((item, index) => (
          <div key={index} className="flex " >
            {Object.values(item).map((Image, subIndex) => (
              <div key={subIndex} className="">

              <Link to='/'>
                <CircleCard key={subIndex} Image={Image} />
              </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
     <ItemSection/>
    </div>
  );
};

export default Home;
