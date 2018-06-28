import "foundation-sites/js/entries/foundation";
import "../css/custom.scss";

$(document).foundation();

var viewportHeight = window.innerHeight;
var headerHeight = $('#header').height();
var imageHeight = viewportHeight - headerHeight - 26;
$('.callout.primary, .shade-layer').height(imageHeight);
//$('.shade-layer').height(imageHeight - 224);
var calloutObj = $('#call-out');
var calloutPadding = imageHeight/2 - calloutObj.height()/2;
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
