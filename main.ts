info.onCountdownEnd(function () {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let car: Sprite = null
let babyDino: Sprite = null
game.setGameOverPlayable(true, music.stringPlayable("C E F G F A B C5 ", 500), false)
music.play(music.createSong(assets.song`scratch_dino_song`), music.PlaybackMode.LoopingInBackground)
let mamaDino = sprites.create(assets.image`Mama`, SpriteKind.Player)
controller.moveSprite(mamaDino, 0, 100)
mamaDino.setStayInScreen(true)
scene.setBackgroundImage(assets.image`Freeway`)
scroller.scrollBackgroundWithSpeed(-50, 0)
info.startCountdown(15)
animation.runImageAnimation(
mamaDino,
assets.animation`Mama Moving`,
100,
true
)
forever(function () {
    babyDino = sprites.createProjectileFromSide(assets.image`Baby`, -50, 0)
    babyDino.y = randint(15, 115)
    animation.runImageAnimation(
    babyDino,
    assets.animation`Animated Baby`,
    100,
    true
    )
    pause(1000)
})
forever(function () {
    car = sprites.createProjectileFromSide(assets.image`Tourist`, -90, 0)
    car.y = randint(15, 115)
    car.setKind(SpriteKind.Enemy)
    animation.runImageAnimation(
    car,
    assets.animation`Animated Tourist`,
    100,
    true
    )
    pause(2100)
})
