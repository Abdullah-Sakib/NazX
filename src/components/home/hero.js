import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: false,
    swipeToSlide: false,
    fade: true,
  };

  const images = [
    "https://i.ibb.co/kcX2FGK/2.jpg",
    "https://i.ibb.co/hHYfmHR/1.jpg",
  ];

  return (
    <div className="overflow-hidden">
      {" "}
      <Slider {...settings}>
        {images?.map((item) => (
          <div
            key={item}
            className="w-full max-h-[80vh]  flex justify-center items-center"
          >
            {" "}
            <Image
              height={700}
              width={1000}
              layout="responsive"
              className="object-cover object-center mx-auto"
              alt="banner image"
              src={item}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
