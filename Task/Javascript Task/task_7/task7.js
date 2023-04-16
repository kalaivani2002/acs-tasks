


document.getElementById('from').value = 0
document.getElementById('to').value = 100

function calculate(){
    let str = ''
        let from 
        from = document.getElementById('from').value
        let to = document.getElementById('to').value
        let num = document.getElementById('divisible').value
        console.log("tt", from,to,num)
        for (var i = parseInt(from); i < parseInt(to); i++) {
            // console.log("tt",i)
            let divisible = i/parseInt(num) 
                if((i % parseInt(num)) == 0){
                    console.log("tt",num,divisible)
                    const node = document.createElement("span");
                    const textnode = document.createTextNode(i);
                    node.appendChild(textnode);
                    document.getElementById('display').appendChild(node)
                   str =  str +''+ i
                } 
            // console.log(document.getElementById('display').innerHTML,divisible,from,to,num)document.getElementById('display').innerHTML
        }
        console.log(str)
        document.getElementById('display').innerHTML = str
}