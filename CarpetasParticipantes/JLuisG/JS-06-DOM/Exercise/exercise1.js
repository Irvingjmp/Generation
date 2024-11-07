// Exercise #1
// Modify the style of the paragraph text through javascript code. Sample HTML file:
// By clicking on the button, the font, font size, and color of the paragraph text should change.

function js_style(){
    const paragraph = document.getElementById('text');
    paragraph.style.fontFamily = 'Verdana';
    paragraph.style.fontSize = '200px';
    paragraph.style.color = 'blue';
};
