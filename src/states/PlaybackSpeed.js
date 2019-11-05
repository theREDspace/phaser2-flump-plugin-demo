export class PlaybackSpeed extends Phaser.State {
    create() {
        const halfSpeed = this.game.flump.createSymbol("greenSquarePlaybackDemo");
        halfSpeed.position.set(this.game.width / 2, this.game.height * 0.15);
        this.game.world.add(halfSpeed);

        const normalSpeed = this.game.flump.createSymbol("greenSquarePlaybackDemo");
        normalSpeed.position.set(this.game.width / 2, this.game.height * 0.5);
        this.game.world.add(normalSpeed);

        const doubleSpeed = this.game.flump.createSymbol("greenSquarePlaybackDemo");
        doubleSpeed.position.set(this.game.width / 2, this.game.height * 0.85);
        this.game.world.add(doubleSpeed);

        halfSpeed.playbackSpeed = 0.5;
        doubleSpeed.playbackSpeed = 2;
    }

    render() {
        this.game.debug.text(this.game.time.fps || '--', 2, 14, "#00ff00"); 
    }
}