export class FrameLabelEvents extends Phaser.State {
    preload() {
        this.game.load.audio("boop", ["assets/audio/boop.mp3", "assets/audio/boop.ogg"], true);
    }

    create() {
        const sound = this.game.add.sound("boop", 0.5);

        const movie = this.game.flump.createSymbol("greenSquareFrameLabels");
        movie.position.set(this.game.width / 2, this.game.height / 2);
        this.game.world.add(movie);

        movie.labelEvents.add((label) => {
            if (label === "playSfx") {
                sound.play();
            }
        });
    }

    shutdown() {
        this.game.cache.removeSound("boop");
    }

    render() {
        this.game.debug.text(this.game.time.fps || '--', 2, 14, "#00ff00"); 
    }
}