

let start = 0
let first
let sec
function hide(id){
   
    if(!start){
        document.getElementById(id).style.display = 'none'
        start = 1
        first = id
    }else{
        document.getElementById(first).style.display = 'block'
        first = id
        document.getElementById(id).style.display = 'none'
    }
}