(function ($) {

    $.fn.enterPressed = function (func) {
        this.keypress(function (e) {
            if ((e.keyCode || e.which) === 13) {
                func();
            }
        });
        return this;
    };

}(jQuery));