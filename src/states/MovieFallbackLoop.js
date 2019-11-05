export class MovieFallbackLoop extends Phaser.State {
    create() {
        this.keyIdx = 0;
        this.keys = ["orangeSquareAlpha", "orangeSquareSkewLeft", "orangeSquareSkewRight"];

        const movie = this.game.flump.createSymbol("orangeSquareRotate");
        movie.position.set(this.game.width / 2, this.game.height / 2);
        this.game.world.add(movie);

        movie.inputEnabled = true;
        movie.hitArea = new Phaser.Rectangle(-50, -50, 100, 100);

        movie.events.onInputUp.add(() => {
            // PlayOnce the next animation in the list, then fallback to "orangeSquareRotate".
            // The boolean second parameter is for restarting the animation for playOnce and defaults to true.
            // For this example we keep it at its default value, as the animation we're playing once is
            // a different animation then what's currently playing, so it's going to restart anyway.
            // If the animation we were going to playOnce was the same as the current animation, then
            // the restart flag can be used to restart that animation.
            movie.playOnce(this.keys[this.keyIdx], true, "orangeSquareRotate");
            this.keyIdx = (this.keyIdx + 1) % this.keys.length;
        });
    }

    render() {
        this.game.debug.text(this.game.time.fps || '--', 2, 14, "#00ff00"); 
    }
}