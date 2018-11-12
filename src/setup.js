'use strict';

function setup () {
    S('gamescreen').display = 'none';
}
setup();

function hideTitleScreen () {
    $("#titlescreen").fadeOut(1000);
    setTimeout(showGameScreen, 1000);
}

function showGameScreen () {
    $("#gamescreen").show();
}