let alldiv = document.getElementsByClassName('second_main');
let playername = document.getElementById('player');

let One = prompt("Hello!!\nEnter The Name Of First Player:-");
let Two = prompt("Hello!!\nEnter The Name Of Second Player:-");
let player = One;
playername.innerHTML = player;

Array.from(alldiv).forEach(e => {
    e.addEventListener('click', function () {
        if (e.innerHTML === '') {
            player = (player === Two) ? One : Two;
            playername.innerHTML = player;

            e.innerHTML = (player === Two) ? 'X' : 'O';

            if (checkResult()) {
                player = (player === Two) ? One : Two;
                alert("Hurreyy!!!\n" + player + ' wins!!');
            } else if (isTie()) {
                alert('Bad Noone win\nIt\'s a tie!');
            }
        } else {
            alert('Try next');
        }
    });
});

function checkLine(a, b, c) {
    return a.innerHTML !== '' && a.innerHTML === b.innerHTML && a.innerHTML === c.innerHTML;
}

function checkResult() {
    // Rows
    if (checkLine(alldiv[0], alldiv[1], alldiv[2]) ||
        checkLine(alldiv[3], alldiv[4], alldiv[5]) ||
        checkLine(alldiv[6], alldiv[7], alldiv[8])) {
        return true;
    }

    // Columns
    if (checkLine(alldiv[0], alldiv[3], alldiv[6]) ||
        checkLine(alldiv[1], alldiv[4], alldiv[7]) ||
        checkLine(alldiv[2], alldiv[5], alldiv[8])) {
        return true;
    }

    // Diagonals
    if (checkLine(alldiv[0], alldiv[4], alldiv[8]) ||
        checkLine(alldiv[2], alldiv[4], alldiv[6])) {
        return true;
    }

    return false;
}

function isTie() {
    for (let i = 0; i < alldiv.length; i++) {
        if (alldiv[i].innerHTML === '') {
            return false; // Game is still ongoing
        }
    }
    return true; // It's a tie
}

function ram() {
    Array.from(alldiv).forEach(e => {
        e.innerHTML = '';
    });
One = prompt("Hello!!\nEnter The Name Of First Player:-");
Two = prompt("Hello!!\nEnter The Name Of Second Player:-");
player = One;
playername.innerHTML = player;
}
