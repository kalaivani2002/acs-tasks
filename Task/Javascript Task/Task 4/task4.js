function check(id) {
   let text = document.getElementById(id).innerHTML
   let vowel = ['a','e','i','o','u']
   for (let index = 0; index < vowel.length; index++) {
       if(text[0] === vowel[index]){
        document.getElementById(id).style.background = 'red'
        console.log(text[0],vowel[index],(text[0] === vowel[index]))
        break ;
       }else{
        document.getElementById(id).style.background = 'green'
       }
   }
}