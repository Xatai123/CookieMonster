let cookieCell = $("#cookie").parent();
let cookieImg = '<img id="cookie" src="imgs/cookie.png">'

let monsterCell = $("#monster").parent();
let monsterImg = '<img id="monster" src="imgs/monster.png">'

let score = 0;

let tmp = 1;

// for (let i = 0; i < 20000; i++) {
//     tmp = placeCookie(tmp);
//     console.log(tmp);
// }


function placeCookie(k) {
    let rndm = Math.floor(Math.random() * 100);
    if (rndm != k) {
        $(".cell")[rndm].innerHTML = cookieImg;
        return rndm;
    } else {
        return placeCookie(k);
    }
}

placeCookie(-1);

$("body").keydown(function (e) {
    let m = $(".cell").indexOf(($("#monster").parent()[0]));
    let c = $(".cell").indexOf(($("#cookie").parent()[0]));

    console.log(c + "  " + m);


    if (e.which === 37) {
        if (m % 10 !== 0) {
            $("#monster").parent()[0].innerHTML = "";
            $(".cell")[m - 1].innerHTML = monsterImg;
        }
    } else if (e.which === 39) {
        if (m % 10 !== 9) {
            $("#monster").parent()[0].innerHTML = "";
            $(".cell")[m + 1].innerHTML = monsterImg;
        }
    } else if (e.which === 38) {
        if (m / 10 >= 1) {
            $("#monster").parent()[0].innerHTML = "";
            $(".cell")[m - 10].innerHTML = monsterImg;
        }
    } else if (e.which === 40) {
        if (m < 90) {
            $("#monster").parent()[0].innerHTML = "";
            $(".cell")[m + 10].innerHTML = monsterImg;
        }
    }

    m = $(".cell").indexOf(($("#monster").parent()[0]));

    if (m === c) {
        placeCookie(c);
        score++;
        $("#score")[0].innerHTML = score;
    }


});

Object.prototype.indexOf = function (item) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] == item) {
            return i;
        }
    }
}