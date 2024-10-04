"use client";
import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import Image from "next/image";
import SubHeading from "@/app/components/Subheading/Subheading"
import images from "@/app/constants/images";
import "./Gallery.css";


function getInstagramImages(username){
    return [
        images.gallery01,
        images.gallery02,
        images.gallery03,
        images.gallery04,
      ];
}


export default function() {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p
          className="p__opensans"
          style={{ color: "#AAAAAA", marginTop: "2rem" }}>
          En lezzetli içeriklerimizi kaçırmamak için instagram sayfamızı takip edin!
        </p>
        <button type="button" className="custom__button" onClick={() => {window.open('https://www.instagram.com/lacasadepastaluleburgaz/')}}>
          Ziyaret et
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {getInstagramImages().map((image, index) => (
                <div
                className="app__gallery-images_card flex__center"
                key={index}>
              <Image src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
            />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
            />
        </div>
      </div>
    </div>
  );
};
