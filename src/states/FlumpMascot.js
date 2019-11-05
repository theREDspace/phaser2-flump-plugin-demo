export class FlumpMascot extends Phaser.State {
    preload() {
        this.load.flumpAtlas("mascotLibrary", "assets/flump/mascot/library.json", "assets/flump/mascot/atlas0.png");
    }

    create() {
        this.game.flump.addLibrary("mascotLibrary");

        this.movie = this.game.flump.createSymbolFrom("mascotLibrary", "walk");
        this.movie.position.set(this.game.width + 100, this.game.height - 50);
        this.game.world.add(this.movie);

        this.tween(-1);
    }

    shutdown() {
        this.game.flump.removeLibrary("mascotLibrary", true);
        this.movie = undefined;
    }

    tween(direction) {
        const halfWidth = this.game.width / 2;
        const endX = halfWidth + (halfWidth * direction * 1.25);

        const tween = this.game.add.tween(this.movie.position).to({ x: endX }, 11500);
        tween.onComplete.addOnce(() => this.tween(direction * -1));
        tween.start();

        this.movie.scale.set(direction * -1, 1);
    }

    render() {
        this.game.debug.text(this.game.time.fps || '--', 2, 14, "#00ff00"); 
    }
}