import "foundation-sites/js/entries/foundation";
import "../css/custom.scss";

$(document).foundation();

var viewportHeight = window.innerHeight;
var headerHeight = $('#header').height();
var imageHeight = viewportHeight - headerHeight - 26;
$('.callout.primary').height(imageHeight);
$('.shade-layer').height(imageHeight - 224);