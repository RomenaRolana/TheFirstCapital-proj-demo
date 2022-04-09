import $ from "jquery"; // jquerry is outdated, better use REACT
import slick from "slick-carousel"; // react slick is better

$('.autoplay').slick({
    slidesToShow: 1,
    arrows: false,
  slidesToScroll: 1,
  autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
});
