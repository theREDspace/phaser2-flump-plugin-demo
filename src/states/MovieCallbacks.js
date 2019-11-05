export class MovieCallbacks extends Phaser.State {
    create() {
        const scaleMovie = this.game.flump.createSymbol("orangeSquareScale").stop();
        scaleMovie.position.set(380, 110);
        this.game.world.add(scaleMovie);

        const alphaMovie = this.game.flump.createSymbol("orangeSquareAlpha").stop();
        alphaMovie.position.set(580, 110);
        this.game.world.add(alphaMovie);

        const translateMovie = this.game.flump.createSymbol("orangeSquareTranslate").stop();
        translateMovie.position.set(100, 270);
        this.game.world.add(translateMovie);

        const rotateMovie = this.game.flump.createSymbol("orangeSquareRotate").stop();
        rotateMovie.position.set(280, 430);
        this.game.world.add(rotateMovie);

        const skewLeftMovie = this.game.flump.createSymbol("orangeSquareSkewLeft").stop();
        skewLeftMovie.position.set(480, 430);
        this.game.world.add(skewLeftMovie);

        const skewRightMovie = this.game.flump.createSymbol("orangeSquareSkewRight").stop();
        skewRightMovie.position.set(680, 430);
        this.game.world.add(skewRightMovie);

        this.movieIdx = 0;
        this.movies = [scaleMovie, alphaMovie, translateMovie, rotateMovie, skewLeftMovie, skewRightMovie];

        this.playNext();
    }

    playNext() {
        this.movies[this.movieIdx].playOnce();
        this.movies[this.movieIdx].playbackComplete.addOnce(this.playNext, this);
        this.movieIdx = (this.movieIdx + 1) % this.movies.length;
    }

    render() {
        this.game.debug.text(this.game.time.fps || '--', 2, 14, "#00ff00"); 
    }
}