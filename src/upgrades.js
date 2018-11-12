function buyLight () {
    if (player.inventory.pump1energy >= 5 && player.upgrades.light === false) {
        S('creationarealight').display = 'none';
        player.inventory.pump1energy -= 5;
        O('inventoryenergy').innerHTML = 'Energy: ' + player.inventory.pump1energy;
        S('creationareacollect').display = 'inline-block';
        player.upgrades.light = true;
        makep("\nThe light's on now. There are some components lying around. Maybe you can pick them up?", 'statuslog', 'statuslogwords');
    }
}

function createLightMaker () {
    if (player.inventory.pump1energy >= 20 && player.inventory.components >= 10 && player.upgrades.lightmaker === false) {
        player.inventory.pump1energy -= 20;
        player.inventory.components -= 10;
        S('creationarealightmaker').display = 'none';
        S('settingsboxsettings').bottom = '50%';
        $('#settingsboxmachinery').fadeIn(1000);
        //S('settingsboxmachinery').display = 'inline-block'; //find a way to use jquery with typescript
        O('inventoryenergy').innerHTML = "Energy: " + player.inventory.pump1energy;
        O('inventorycomponents').innerHTML = "Components: " + player.inventory.components;
        player.upgrades.lightmaker = true;
        player.upgrades.lightmakerupgradelevel = 1;
        player.upgrades.lightmakerupgradelevelcost = 40;
        makep("\nNow there's a light maker. Perhaps you could power it to see further?", 'statuslog', 'statuslogwords');
    }
}

function createAutoPumper1 () {
    if (player.inventory.pump1energy >= 20 && player.inventory.components >= 20 && player.upgrades.autopumper === false) {
        player.inventory.pump1energy -= 20;
        player.inventory.components -= 20;
        S('creationareaautopumper1').display = 'none';
        autopumper1(1000);
        O('machineryarealightslider').max = '3';
        player.misc.lightmakermax = 3;
        O('inventoryenergy').innerHTML = "Energy: " + player.inventory.pump1energy;
        O('inventorycomponents').innerHTML = "Components: " + player.inventory.components;
        player.upgrades.autopumper = true;
        makep("\nFinally. That pump was starting to hurt. Hopefully you can look a little further now.", 'statuslog', 'statuslogwords');
    }
}

function upgradeLightMaker () {
    console.log('one')
    if (player.inventory.pump1energy >= player.upgrades.lightmakerupgradelevelcost && player.inventory.components >= (player.upgrades.lightmakerupgradelevelcost / 2) && player.upgrades.lightmakerupgradelevel < 5 && player.inventory.electronics >= (player.upgrades.lightmakerupgradelevelcost / 10)) {
        console.log('two');
        player.inventory.pump1energy -= player.upgrades.lightmakerupgradelevelcost;
        player.inventory.components -= player.upgrades.lightmakerupgradelevelcost / 2;
        player.inventory.electronics -= player.upgrades.lightmakerupgradelevelcost / 10;
        player.upgrades.lightmakerupgradelevel++;
        player.misc.lightmakermax++;
        console.log('three');
        O('machineryarealightslider').max = player.misc.lightmakermax;
        console.log('four');
        if (player.upgrades.lightmakerupgradelevel === 5) {
            S('creationareaupgradelightmaker').display = 'none';
            console.log('not five');
        }
        if (player.misc.lightmakermax == 4) {
            S('creationAreaAutoCollector').display = 'inline-block';
            console.log('six');
        }
        console.log('seven');
        player.upgrades.lightmakerupgradelevelcost = (player.upgrades.lightmakerupgradelevelcost * 1.75).toFixed(1);
        O('inventoryenergy').innerHTML = "Energy: " + player.inventory.pump1energy;
        O('inventorycomponents').innerHTML = "Components: " + player.inventory.components;
        O('inventoryelectronics').innerHTML = "Electronics: " + player.inventory.components;
        O('creationareaupgradelightmakertooltip').innerHTML = player.upgrades.lightmakerupgradelevelcost + " energy, " + player.upgrades.lightmakerupgradelevelcost / 2 + " components, and " + player.upgrades.lightmakerupgradelevelcost / 10 + " electronics. Upgrade your light maker to see further."
        console.log('eight');
    }
    console.log('nine');
}

function createAutoCollector () {
    if (player.inventory.pump1energy >= 40 && player.inventory.components >= 30 && player.inventory.electronics >= 5) {
        if (player.misc.has1autocollector === false) {    
            makep("\nYou programmed in an AutoCollector! These little guys can auto-collect things for you.", "statuslog", "statuslogwords");
            $('#inventoryautocollectors').fadeIn(1000);
            S('creationAreaAutoCollector').display = 'none';
        }
        player.misc.has1autocollector = true;
        player.inventory.autocollectors++;
        player.inventory.pump1energy -= 40;
        player.inventory.components -= 30;
        player.inventory.electronics -= 5;
        O('inventoryenergy').innerHTML = "Energy: " + player.inventory.pump1energy;
        O('inventorycomponents').innerHTML = "Components: " + player.inventory.components;
        O('inventoryelectronics').innerHTML = "Electronics: " + player.inventory.electronics;
        O('inventoryautocollectors').innerHTML = 'Autocollectors: ' + player.inventory.autocollectors;
        collectComponents();
    }
}