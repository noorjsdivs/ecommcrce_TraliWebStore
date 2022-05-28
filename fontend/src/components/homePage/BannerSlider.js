import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
function BannerSlider() {
  let [sliderData, setSliderData] = useState([]);
  useEffect(() => {
    async function sliderbackendData() {
      let { data } = await axios.get("http://localhost:8000/bannerSlider");
      setSliderData(data);
    }
    sliderbackendData();
  }, []);
  return (
    <div className="homeBanner">
      <div className="homeBanner__slider">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          //   showIndicators={false}
          showThumbs={false}
          interval={3000}
        >
          {sliderData.map((item) => (
            <div key={item._id}>
              <img src={item.img} alt="" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default BannerSlider;
