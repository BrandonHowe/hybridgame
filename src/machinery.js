var lightSlider = document.getElementById('machineryarealightslider');
var lightSliderAmount = 0;
var lightMakerRunning = false;

lightSlider.oninput = function () {
    lightSliderAmount = O('machineryarealightslider').value;
    if (lightMakerRunning === false) {
        lightMaker();
    }
    if (lightSliderAmount >= 1) {
        if (player.logs.lightmaker1 === false && lightSliderAmount == 1) {
            S('creationareaautopumper1').display = 'inline-block';
            player.logs.lightmaker1 = true;
            S('creationareacollect').display = 'inline-block';
            makep('\nLooks like the parts to an AutoPumper are out there. With some components and energy, you could fix it!', 'statuslog', 'statuslogwords');
        }
        if (lightSliderAmount == 2 && player.lightzones.components.zone2 > 0) {
            S('creationareacollect').display = 'inline-block';
        }
        if (lightSliderAmount == 1 && player.lightzones.components.zone1 <= 0) {
            S('creationareacollect').display = 'none';
        }
        if (lightSliderAmount == 3 && player.lightzones.components.zone3 > 0) {
            S('creationareacollect').display = 'inline-block';
        }
    }
    if (lightSliderAmount <= 0) {
        S('creationareacollect').display = 'none';
    }
}

function lightMaker () {
    if (player.inventory.pump1energy > 0) {
        lightMakerRunning = true;
        player.inventory.pump1energy -= Number(lightSliderAmount);
        O('inventoryenergy').innerHTML = "Energy: " + player.inventory.pump1energy;
        setTimeout(lightMaker, 1000);
    } else {
        O('machineryarealightslider').value = '0';
        lightMakerRunning = false;
    }
}
lightMaker();