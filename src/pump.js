'use strict';

var pump1phase = 10;
var pump1phasedirection = true;
var pump1counts = 0;

function pump1 () {
    S('hybridtank1pump').top = pump1phase + '%';
    S('hybridtank1shaft').top = pump1phase + 5 + '%';
    if (pump1phasedirection == true) {
        pump1phase += 0.2;
        if (pump1phase >= 30) {
            pump1phasedirection = false;
        }
        setTimeout(pump1, 6);
    } else {
        pump1phase -= 0.2;
        if (pump1phase > 10) {
            setTimeout(pump1, 6);
        } else {
            pump1phasedirection = true;
            pump1counts++;
            energygain('pump1')
        }
    } 
}

function energygain (a) {
    if (a === 'pump1') {
        player.inventory.pump1energy++;
        if (pump1counts === 1) {
            $('#inventoryenergy').fadeIn(1000);
            O('inventoryenergy').innerHTML = "Energy: " + player.inventory.pump1energy;
            makep('\nLooks like this pump makes some energy.', 'statuslog', 'statuslogwords');
        }
        O('inventoryenergy').innerHTML = "Energy: " + player.inventory.pump1energy;
        if (player.inventory.pump1energy === 5 && player.upgrades.light === false) {
            makep('\nLooks like a light switch. Maybe you can use some power to get the light to work?', 'statuslog', 'statuslogwords');
            $('#creationarealight').fadeIn(1000);
        }
        if (player.inventory.pump1energy >= 35 && player.misc.canUpgradeLightmaker === false && player.upgrades.lightmaker === true) {
            player.misc.canUpgradeLightmaker = true;
            makep("\nThis light maker is weak. Maybe you can upgrade it?","statuslog","statuslogwords");
            S('creationareaupgradelightmaker').display = 'inline-block';
        }
    }
}

function autopumper1 (delay) {
    pump1();
    setTimeout(autopumper1, delay, delay);
}