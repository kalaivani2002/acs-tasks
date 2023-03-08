
var colors= ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
'lime', 'maroon', 'navy', 'olive'];

let count = 0
let color_count = {}

function change(){
   let num = Math.floor(Math.random() * 10)
   document.body.style.background = colors[num]
   if(color_count[colors[num]]){
    color_count[colors[num]] = color_count[colors[num]] + 1
   }else{
    color_count[colors[num]] = 1;
   }
//    console.log(colors[num],color_count[colors[num]])
   document.getElementById('count').innerHTML = color_count[colors[num]]
}