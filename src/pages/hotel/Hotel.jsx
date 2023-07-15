import "./hotel.css";
import Header from "../../component/header/Header";
import Navbar from "../../component/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import MailList from "../../component/mailList/MailList";
import Footer from "../../component/footer/Footer";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://media.istockphoto.com/id/171246403/photo/exterior-of-new-suburban-house.jpg?s=1024x1024&w=is&k=20&c=rhs8kxy2rKRPPKOsE9i4mVZvQslCsS86EPR47ppVNew=",
    },
    {
      src: "https://media.istockphoto.com/id/171246403/photo/exterior-of-new-suburban-house.jpg?s=1024x1024&w=is&k=20&c=rhs8kxy2rKRPPKOsE9i4mVZvQslCsS86EPR47ppVNew=",
    },
    {
      src: "https://media.istockphoto.com/id/171246403/photo/exterior-of-new-suburban-house.jpg?s=1024x1024&w=is&k=20&c=rhs8kxy2rKRPPKOsE9i4mVZvQslCsS86EPR47ppVNew=",
    },
    {
      src: "https://media.istockphoto.com/id/171246403/photo/exterior-of-new-suburban-house.jpg?s=1024x1024&w=is&k=20&c=rhs8kxy2rKRPPKOsE9i4mVZvQslCsS86EPR47ppVNew=",
    },
    {
      src: "https://media.istockphoto.com/id/171246403/photo/exterior-of-new-suburban-house.jpg?s=1024x1024&w=is&k=20&c=rhs8kxy2rKRPPKOsE9i4mVZvQslCsS86EPR47ppVNew=",
    },
    {
      src: "https://media.istockphoto.com/id/171246403/photo/exterior-of-new-suburban-house.jpg?s=1024x1024&w=is&k=20&c=rhs8kxy2rKRPPKOsE9i4mVZvQslCsS86EPR47ppVNew=",
    },
  ];

  const handleOpen = (index) => {
    setSlideNumber(index);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighLight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, index) => (
              <div className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(index)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Krakov</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florian's Gate in Krakov, Tower
                Street Apartments has accomodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Mall, Main Market Square and town Hall Tower. The nearest
                airport is John II International Krakov-Balice, 16.1km from
                Tower Street Apartments and the property offers a paid airport
                shuttle service.{" "}
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-nights stay!</h1>
              <span>
                Located in the real heart of Krakov, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Researve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
