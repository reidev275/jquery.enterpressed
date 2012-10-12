# jquery.enterpressed

jquery extension that abstracts keyup keycode logic


# Example

## HTML

`<input id="input" type="text" /><button id="button">Submit</button>`

## JavaScript

`
function submitted() {
    alert('submitted');
}

$("#input").enterPressed(submitted);
$("#button").click(submitted);
`