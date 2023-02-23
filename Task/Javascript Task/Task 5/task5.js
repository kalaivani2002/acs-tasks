
function member(id,number) {
    let text = document.getElementById(id).innerHTML;
    let length = text.length;
    var num = length % 2;
    if(num != 0){
        document.getElementById(id).style.color = 'red'
    }
}
 