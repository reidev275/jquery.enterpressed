(function ($) {

    $.prototype.enterPressed = function (fn) {
        $(this).keyup(function (e) {
            if ((e.keyCode || e.which) == 13) {
                fn();
            }
        });
    };

}(jQuery || {}));