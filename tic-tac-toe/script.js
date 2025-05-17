const boxes = document.querySelectorAll('.boxes')
console.log(boxes);

const winningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let turnX = true;
let moves = [[]];
boxes.forEach((box) => {
    box.addEventListener('click', (event) => {
        if(turnX) {
            box.textContent = 'X';
            box.style.color = 'blue'
            turnX = false;
            moves.push()
        } else {
            box.textContent = 'O';
            box.style.color = 'yellow'
            turnX = true;
        }
        box.disabled = true
        checkWinner();
    })
})


const result = document.querySelector('.result')

function checkWinner() {
    for(pattern of winningPattern){
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]],boxes[pattern[0]],boxes[pattern[0]]);

        const val1 = boxes[pattern[0]].textContent;
        const val2 = boxes[pattern[1]].textContent;
        const val3 = boxes[pattern[2]].textContent;

        console.log(val1,val2,val3);

        if(val1 != '' && val2 != '' && val3 != '') {
            if(val1 === val2 && val2 === val3){
                console.log("winner");
                result.textContent = `${val1} Wins`
                boxes.forEach(box => {
                    box.disabled = true;
                })
                break;
            }
        }
    }
}

const reset = document.querySelector('.reset')
reset.addEventListener('click', event => {
    boxes.forEach(box => {
        box.textContent = '';
        box.disabled = false;
        turnX=true
        result.textContent = '';
    })
})


