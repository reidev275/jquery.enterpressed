#About
**jquery.enterpressed** is a plug-in that lets you focus on form behavior rather than which key the user presses.


## Example
A working example can be found at http://jsfiddle.net/EnjB3/8/

Given the following HTML

    <input id="input" type="text" />

We can simply write the following javascript

    $("#input").enterPressed(function() {
        //do something
    });
    
Any code contained within the function will run when a user presses the enter key with their focus in the input.  
This can be very useful in cases where pressing enter and clicking a button should both trigger the same action.