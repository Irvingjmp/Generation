function js_style(){
    document.getElementById('jsstyle').addEventListener('click',function(){
    
        const parrafo = document.getElementById('text');
    
        parrafo.style.fontFamily = 'Arial, Helvetica, sans-serif';
        parrafo.style.fontSize = '30px';
        parrafo.style.color = 'blue';
    })
}