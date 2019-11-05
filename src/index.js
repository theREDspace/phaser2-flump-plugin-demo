import PIXI from 'expose-loader?PIXI!phaser-ce/build/custom/pixi.js';
import p2 from 'expose-loader?p2!phaser-ce/build/custom/p2.js';
import Phaser from 'expose-loader?Phaser!phaser-ce/build/custom/phaser-split.js';
import { FlumpPlugin } from '@redspace/phaser2-flump-plugin';
import * as States from "./states";

const game = new Phaser.Game(960, 540, Phaser.AUTO, undefined, {
    init() {
        // Toggle this on so we can calculate FPS
        game.time.advancedTiming = true;
        game.stage.backgroundColor = "0x6495ED";

        // Globally install the Flump plugin.
        game.plugins.add(new FlumpPlugin(game));
    },

    preload() {
        // Load the demo Flump library assets.
        game.load.flumpAtlas("demoLibrary", "assets/flump/demo/library.json", "assets/flump/demo/atlas0.png");
    },

    create() {
        // Add the demo library to the playgin
        game.flump.addLibrary("demoLibrary");
        
        // Switch to a demo state.
        game.state.add("demo", States.FlumpMascot, true);
    }
});