export class NestedMovie extends Phaser.State {
    create() {
        const movie = this.game.flump.createSymbol("greenOrangeNestedFade");
        movie.position.set(this.game.width / 2, this.game.height / 2);
        this.game.world.add(movie);
    }

    render() {
        this.game.debug.text(this.game.time.fps || '--', 2, 14, "#00ff00"); 
    }
}