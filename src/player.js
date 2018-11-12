var player = {
    inventory: {
        pump1energy: 0,
        components: 0,
        electronics: 0,
        autocollectors: 0,
    },
    upgrades: {
        light: false,
        lightmaker: false,
        autopumper: false,
        lightmakerupgradelevel: 0,
        lightmakerupgradelevelcost: 0,
    },
    logs: {
        lightmaker1: false,
        lightmaker2: false,
        lightmaker3: false,
    },
    lightzones: {
        components: {
            zone0: 20,
            zone1: 20,
            zone2: 30,
            zone3: 40,
            zone4: 50,
            zone5: 60,
        }
    },
    misc: {
        has1electronic: false,
        has1autocollector: false,
        canUpgradeLightmaker: false,
        lightzone: 0,
        lightmakermax: 2,
    }
}