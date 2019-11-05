export class BasicTransformations extends Phaser.State {
    create() {
        const scaleMovie = this.game.flump.createSymbol("orangeSquareScale");
        scaleMovie.position.set(380, 110);
        this.game.world.add(scaleMovie);

        const alphaMovie = this.game.flump.createSymbol("orangeSquareAlpha");
        alphaMovie.position.set(580, 110);
        this.game.world.add(alphaMovie);

        const translateMovie = this.game.flump.createSymbol("orangeSquareTranslate");
        translateMovie.position.set(100, 270);
        this.game.world.add(translateMovie);

        const rotateMovie = this.game.flump.createSymbol("orangeSquareRotate");
        rotateMovie.position.set(280, 430);
        this.game.world.add(rotateMovie);

        const skewLeftMovie = this.game.flump.createSymbol("orangeSquareSkewLeft");
        skewLeftMovie.position.set(480, 430);
        this.game.world.add(skewLeftMovie);

        const skewRightMovie = this.game.flump.createSymbol("orangeSquareSkewRight");
        skewRightMovie.position.set(680, 430);
        this.game.world.add(skewRightMovie);
    }

    render() {
        this.game.debug.text(this.game.time.fps || '--', 2, 14, "#00ff00"); 
    }
}