sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    info.changeLifeBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dart = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 2 2 . . . . . . . . .
        . . . 5 2 2 5 2 2 2 2 5 . . . .
        . . . . . 2 2 . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, spacePlane, 200, 200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let dart: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . 8 . . . . . . . .
    . . . . . . . 8 8 . . . . . . .
    . . 8 8 . . . . 8 8 . . . . . .
    . . . 8 8 8 8 8 8 8 . . . . . .
    . . 8 8 . . . . 8 8 . . . . . .
    . . . . . . . 8 8 . . . . . . .
    . . . . . . . 8 . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
spacePlane.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(5)
controller.moveSprite(spacePlane, 200, 200)
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . f f f f . . . . . . . . . .
        . . . . . . . . f f 1 1 1 1 f f . . . . . . . .
        . . . . . . . f b 1 1 1 1 1 1 b f . . . . . . .
        . . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . .
        . . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . .
        . . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . .
        . . . . . . f d d d 1 1 1 1 d d d f . . . . . .
        . . . . . . f b d b f d d f b d b f . . . . . .
        . . . . . . f c d c f 1 1 f c d c f . . . . . .
        . . . . . . . f b 1 1 1 1 1 1 b f . . . . . . .
        . . . . . . f f f c d b 1 b d f f f f . . . . .
        . . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . .
        . . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . .
        . . . . f b f b f f f f f f b f b f b f . . . .
        . . . . . . . . . f f f f f f . . . . . . . . .
        . . . . . . . . . . . f f f . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
    `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(180, Math.randomRange(8, 112))
})
