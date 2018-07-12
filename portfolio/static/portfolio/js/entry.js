import "foundation-sites/js/entries/foundation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";
import "../css/custom.scss";

$(document).foundation();
$('#test-slick').slick({
  infinity: true,
  dots: false,
  speed: 900,
  autoplay: true,
});

const viewportHeight = window.innerHeight;
const headerHeight = $('#header').height();
const imageHeight = viewportHeight - headerHeight - 26;
$('.call-out, .shade-layer').height(imageHeight);
const calloutObj = $('.shade-layer > div');
const calloutPadding = imageHeight/2 - calloutObj.height()/2;
calloutObj.css('padding-top', calloutPadding);

//execute at startup
$(() => {
  setNavigation();
});

//A function that sets navigation color
const setNavigation = () => {
  let path = window.location.pathname;
  path = path.replace(/\/$/, "");
  path = decodeURIComponent(path);
  
  $("#header-menu a").each((index, element) => {
    var href = $(element).attr("href");
    if (path == href) {
      $("#header-menu li").removeClass("is-active");
      $(element).closest('li').addClass("is-active");
    }
  });
};
