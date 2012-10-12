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