var electronicsphase = 1;
function collectComponents () {
    if (lightSliderAmount == 0) {
        if (player.lightzones.components.zone0 > 0) {
            player.inventory.components++;
            player.lightzones.components.zone0--;
        } else {
            S('creationareacollect').display = 'none';
        }
    } else if (lightSliderAmount == 1) {
        if (player.lightzones.components.zone1 > 0) {
            player.inventory.components++;
            player.lightzones.components.zone1--;
        } else {
            S('creationareacollect').display = 'none';
        }
    } else if (lightSliderAmount >= 2) {
        if (lightSliderAmount == 2) { 
            if (player.lightzones.components.zone2 > 0) {
                player.inventory.components++;
                player.lightzones.components.zone2--;
                electronicsGain();
            } else {
                S('creationareacollect').display = 'none';
            }
        }
        if (lightSliderAmount == 3) {
            if (player.lightzones.components.zone3 > 0) {
                player.inventory.components++;
                player.lightzones.components.zone3--;
                electronicsGain();
            } else {
                S('creationareacollect').display = 'none';
            }
        }
        
    }
    if (player.lightzones.components.zone0 === 19) {
        $('#inventorycomponents').fadeIn(1000);
    } else if (player.lightzones.components.zone0 === 0 && player.upgrades.lightmaker === false) {
        S('creationareacollect').display = 'none';
        makep("\nThere's not enough light to see any further, but you can work with the components you have.", 'statuslog', 'statuslogwords');
        if (player.upgrades.lightmaker === false) {
            S('creationarealightmaker').display = 'inline-block';
        }
    } else if (player.lightzones.components.zone1 >= 0) {
        S('creationareacollect').display = 'inline-block';
    }
    if (player.lightzones.components.zone1 === 0 && player.lightzones.components.zone0 === 0 && lightSliderAmount <= 1) {
        S('creationareacollect').display = 'none';
        if (player.inventory.autocollectors > 0) {
            makep("\nThere are no more components. Maybe you need to power the lightmaker more to find more.", "statuslog", "statuslogwords");
        }
    } else if (player.lightzones.components.zone2 === 0 && lightSliderAmount == 2) {
        S('creationareacollect').display = 'none';
        if (player.inventory.autocollectors === 0) {
            makep("\nThis is getting tiring. With the electronics you have, maybe you can build an autocollector!", "statuslog", "statuslogwords");
        }
        S('creationAreaAutoCollector').display = 'inline-block';
    }
    if (player.inventory.autocollectors > 0) {
        setTimeout(collectComponents, (1000 / player.inventory.autocollectors));
    }
    O('inventorycomponents').innerHTML = 'Components: ' + player.inventory.components;
}

var machinerytab = false;

function switchtabs () {
    if (machinerytab === false) {
        S('inventoryarea').display = 'none';
        S('creationarea').display = 'none';
        S('machineryarea').display = 'inline-block';
        O('settingsboxmachinery').innerHTML = 'Back';
        machinerytab = true;
    } else if (machinerytab === true) {
        S('inventoryarea').display = 'inline-block';
        S('creationarea').display = 'inline-block';
        S('machineryarea').display = 'none';
        O('settingsboxmachinery').innerHTML = 'Machinery';
        machinerytab = false;
    }
}

function electronicsGain () {
    if (electronicsphase === 5) {
        player.inventory.electronics++;
        electronicsphase = 1;
        O('inventoryelectronics').innerHTML = 'Electronics: ' + player.inventory.electronics;
        if (player.misc.has1electronic === false) {
            $('#inventoryelectronics').fadeIn(1000);
            makep("\nAn electronic! These things have a keypad on the front so you can make them do whatever you like.", "statuslog", "statuslogwords");
            player.misc.has1electronic = true;
        }
    } else {
        electronicsphase++;
    }
}