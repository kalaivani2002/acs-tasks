

 let colors =  ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
 'lime', 'maroon', 'navy', 'olive' ]
function checkRadio(color){
      document.getElementById('box').style.background = color;
    for (let index = 0; index < colors.length; index++) {
        if (color == colors[index]) {
            document.getElementById(colors[index]).checked = true;
        }else{
            document.getElementById(colors[index]).checked = false;
        }
    }
}