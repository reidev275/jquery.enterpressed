(function ($) {

    $.fn.enterPressed = function (func) {
        $(this).keyup(function (e) {
            if ((e.keyCode || e.which) == 13) {
                func();
            }
        });
        return this;
    };

}(jQuery || {}));