import $ from "jquery";
import slick from "slick-carousel";

$('.autoplay').slick({
    slidesToShow: 1,
    arrows: false,
  slidesToScroll: 1,
  autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
});