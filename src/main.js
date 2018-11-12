'use strict';

//This is the main program.
//Each time you find a bug in this program
//Or any other file
//Or if you cannot decompile this code into something legible
//Increase this number here
//1

var toggle = true;

function O(i) {
    return document.getElementById(i);
}

function S(i) {
    return O(i).style;
}

function makep(i,j,k) {
    //i is text, j is the id, k is the class
    var h = document.createElement('p');
    var t = document.createTextNode(i);
    h.appendChild(t);
    h.classList.add(k);
    O(j).prepend(h);
}  


// Settings modal

// Get the modal
var settingsmodal = document.getElementById('settingsmodal');
// get the button that opens the modal
var settingsbtn = document.getElementById("settingsboxsettings");
// get the <span> element that closes the modal
var settingsclose = document.getElementsByClassName("settingsmodalclose")[0];
// when the user clicks on the button, open the modal 
settingsbtn.onclick = function () {
    settingsmodal.style.display = "block";
}
// when the user clicks on <span> (x), close the modal
settingsclose.onclick = function() {
    settingsmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == settingsmodal) {
        settingsmodal.style.display = "none";
        S('settingsDeleteSave2').display = 'none';
    }
}

//var autosave;

function saveGame () {
    player.misc.lightzone = lightSliderAmount;
    var jsonSave = JSON.stringify(player);
    localStorage.setItem('save',jsonSave);
    // if (toggle === true) {
    //     autosave = setTimeout(saveGame, 60000);
    // }
}

function loadGame () {
    var getSave = localStorage.getItem('save');
    player = JSON.parse(getSave);
    O('inventoryenergy').innerHTML = "Energy: " + player.inventory.pump1energy;
    O('inventorycomponents').innerHTML = "Components: " + player.inventory.components;
    O('inventoryelectronics').innerHTML = "Electronics: " + player.inventory.electronics;
    player.inventory.components--;
    collectComponents();
    if (player.inventory.pump1energy > 0) {
        S('inventoryenergy').display = 'inline-block';
    }
    if (player.inventory.components > 0) {
        S('inventorycomponents').display = 'inline-block';
    }
    if (player.inventory.electronics > 0) {
        S('inventoryelectronics').display = 'inline-block';
    }
    if (player.upgrades.lightmaker === true) {
        S('settingsboxsettings').bottom = '50%';
        $('#settingsboxmachinery').fadeIn(1000);
        autopumper1(1000);
    }
    if (player.misc.canUpgradeLightmaker === true) {
        S('creationareaupgradelightmaker').display = 'inline-block';
    }
    O('machineryarealightslider').max = player.misc.lightmakermax;
}

function deleteSaveConfirm () {
    S('settingsDeleteSave2').display = 'inline-block';
}

function deleteSave () {
    localStorage.clear();
}

/*
function autoSave() {
    if (toggle === true) {
        clearTimeout(autosave);
        toggle = false;
        O('settingsAutoSave').innerHTML = 'Toggle AutoSave (Currently OFF)';
    }
    if (toggle === false) {
        autosave = setTimeout(saveGame, 60000);
        toggle = true;
        O('settingsAutoSave').innerHTML = 'Toggle AutoSave (Currently ON)';
    }
}*/