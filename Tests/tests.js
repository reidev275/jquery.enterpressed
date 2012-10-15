(function($, q) {
    
    q.test("Function executed if return key pressed", function() {
        var $input = $("#input"), 
            funcCalled = false, 
            event = $.Event( "keypress", { keyCode: 13 });
        
        $input.enterPressed(function() { funcCalled = true; });
        $input.trigger( event );
        
        q.equal(funcCalled, true);
    });
    
    q.test("Function not executed if return key not pressed", function() {
        var $input = $("#input"), 
            funcCalled = false, 
            event = $.Event( "keypress", { keyCode: 12 });
        
        $input.enterPressed(function() { funcCalled = true; });
        $input.trigger( event );
        
        q.equal(funcCalled, false);
    });
    
}(jQuery || {}, QUnit || {}));