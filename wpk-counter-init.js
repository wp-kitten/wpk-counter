//#! Initialize the WpkCounter Element
(function ($) {
    "use strict";
    try {
        new $.WpkCounter('.counter');
    }
    catch (e) {
        console.error(e.message);
    }
}(jQuery));
