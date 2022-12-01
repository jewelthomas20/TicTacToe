var buttons = document.querySelectorAll('td')
let row = document.querySelectorAll('tr')

//fucntion bnaya clear krne kaa  jisme loop chlega
function clearAll() {
   location.reload()
}
let restart=document.querySelector('#b').addEventListener('click', clearAll)

let player1=prompt("Player One: Enter your Name: ","P1")

let player2=prompt("Player Two: Enter your Name: ","P2")

let player = 1;



//check win
function checkwin(one, two, three) {
    if (one === two && one === three && one !== null && one !== undefined && one!=="") {
        return true;
    }
  
}
//Horizontal win
function checkHorizontal() {
    for (var i = 0;i <3 ; i++) {
        for(var j=0;j<1;j++){
            //checking if checkwin is true then only will return true for this () else it will break the loop and i=0
            if(checkwin(row[i].children[j].textContent, row[i].children[j + 1].textContent, row[i].children[j + 2].textContent)){
                return true
            }
            else{continue
            }
        }
    }
}

function checkVertical() {
    for (let col = 0; col< 3; col++) {
        for(let r=0;r<1;r++){
            if(checkwin(row[r].children[col].textContent, row[r+1].children[col].textContent, row[r+2].children[col].textContent)){
                return true
            }
            else{
                continue
            }
            
        }
    }
}
// Diagona

function checkDiagonal(){
    if(checkwin(row[0].children[0].textContent, row[1].children[1].textContent, row[2].children[2].textContent)||checkwin(row[0].children[2].textContent, row[1].children[1].textContent, row[2].children[0].textContent))
    {
        return true
    }
}


//========================Starting the Game
for (var i = 0; i < buttons.length; i++)
 {
     buttons[i].addEventListener("click",function() {
            if (this.textContent === '')
            {
               if (player === 1) {
                   this.textContent = 'X'
              
                }
               else {
                this.textContent = "O"
              }
              if(checkHorizontal()||checkVertical()||checkDiagonal()){
                if(player===1)
                {
                   
                    document.querySelector('table').style.display='none';
                    document.querySelector('#b').classList.add('reset');
                    document.querySelector('.result').style.display='inline-block'
                    document.querySelector('.result').textContent=player1+" Won"
                    setTimeout(()=>{
                        document.querySelector('#ty').style.display='inline-block';
                    },500)
                }
            else{
                document.querySelector('table').style.display='none';
                document.querySelector('#b').classList.add('reset');
                document.querySelector('.result').style.display='inline-block'
                document.querySelector('.result').textContent=player2+" Won"
                setTimeout(()=>{
                    document.querySelector('#ty').style.display='inline-block';
                },500)
            }
            }
               player *=-1;
           }
                 
        
        })
}


// ("click", function () {
//     if (this.textContent === '')
//     {
//        if (player === 1) {
//            console.log(player)

//            this.textContent = 'X'
//        }
//        else {
//            console.log(player)

//            this.textContent = "O"
//        }
//        player *=-1;
//    }


// })


