// html elements
var word1 = document.getElementById('word1'); // answer
var word2 = document.getElementById('word2'); // buttons
var check = document.getElementById('check'); //word1 === word2?
var progress = document.getElementById('progress'); //progress check
var time = document.getElementById('time'); //progress check

// game objects
var game = {
    'btns': [],
    'maxPlay': 3,
    'current': 0

};

game.startTime = Date.now();

game.words = 'apple,linux,javascript,tutorial,girlfriend,ryujeuk,baby,gamemaster'.split(',');

//choose 1 word from words;
game.choose = function () {
    var idx = Math.floor(Math.random() * this.words.length);
    this.answer = this.words[idx];
    this.letters = this.answer.split('');
    word1.innerHTML = this.answer;

};

game.addButtons = function() {
    for (var i = 0; i < this.letters.length; i++) {
        var btn = document.createElement('button');
        btn.innerHTML = this.letters[i];
        word2.appendChild(btn);
        this.btns.push(btn);
    }
};

game.removeButtons = function() {
    for (var i = 0; i < this.btns.length; i++) {
        word2.removeChild(this.btns[i]);
    }
    this.btns = [];
}

game.checkGood = function () {
    return this.answer === this.letters.join('');
}
game.updateDisplay = function () {
    if (this.checkGood()) {
        check.innerHTML = '일치합니다.';
    } else {
        check.innerHTML = '일치하지 않습니다.';
    }
};

game.init = function() {
    this.choose();
    this.addButtons();
};
game.init();


game.copyBtnText = function () {
    for (var i = 0; i < this.letters.length; i++) {
        this.btns[i].innerHTML = this.letters[i];
    }
}

game.swap = function () {
    var temp = [];
     while (game.letters.length > 0) {
        var s = game.letters.pop();
        temp.push(s);
    }
    game.letters = temp;
    game.copyBtnText();
    game.updateDisplay();
};

game.rshift = function() {
    var s = game.letters.pop();
    game.letters.unshift(s);
    game.copyBtnText();
    game.updateDisplay();
};

game.lshift = function () {
    var s = game.letters.shift();
    game.letters.push(s);
    game.copyBtnText();
    game.updateDisplay();
};

game.progress = function () {
    if(this.checkGood()) {
        this.current++;
        game.removeButtons();
        this.init();
        this.shuffle();
        var str = "";
        for(var i = 0; i < this.current; i++) {
            str += "O";
        }
        progress.innerHTML = str;
    }

    if(this.current == this.maxPlay) {
        var sec = (Date.now() - this.startTime) /1000;
        alert('Thank you for playing!\n Your Record: ' + sec + " sec");
        clearInterval(x);
    }
}

// event hadler for swap button
var swap = function() {
    game.swap();
    game.progress();
};
        
var rshift = function() {
    game.rshift();
    game.progress();
 };

var lshift = function() {
    game.lshift();
    game.progress();
};

// shuffle
game.shuffle = function () {
    var toggle = Math.floor(Math.random() * 2) === 0;
    if (toggle) {
        game.swap();
    }

    var n = Math.floor(Math.random() * game.answer.length - 1);
    for (var i = 0; i < n; i++) {
        game.rshift();
    }
};
game.shuffle();

var updateTime = function() {
    var now = Date.now() - game.startTime;
    time.innerHTML = ((now / 1000) + "s");
};

var x = setInterval(updateTime, 50);