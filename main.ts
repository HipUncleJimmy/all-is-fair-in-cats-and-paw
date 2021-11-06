namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const flower = SpriteKind.create()
    export const fireball = SpriteKind.create()
    export const egg = SpriteKind.create()
    export const cickom = SpriteKind.create()
    export const adchicken = SpriteKind.create()
    export const maddestchicken = SpriteKind.create()
    export const enragedchickon = SpriteKind.create()
    export const badegg = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.enragedchickon, function (sprite, otherSprite) {
    if (hops_and_paw.y < enragedchicken.y) {
        otherSprite.destroy(effects.spray, 500)
        info.changeScoreBy(5)
        game.splash("Good Job ", "try nab a high Score!")
        game.over(true, effects.confetti)
    } else {
        info.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cickom, function (sprite, otherSprite) {
    if (hops_and_paw.y < chicken.y) {
        chicken.destroy()
        info.changeScoreBy(5)
        madchicken = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.adchicken)
        animation.runImageAnimation(
        madchicken,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f . . . . . . 
            . f c e e f c e e f . . . . . . 
            . f f f c e e f f f . . . . . . 
            . . . f f c f f f f f f . . . . 
            . . f f f f f f f f b f . . . . 
            . . f 2 4 4 4 f f b 5 f f . . . 
            . . f 2 4 4 4 f b 5 f f f . . . 
            . . f f f f f f b f f 5 f . . . 
            . . . f b 5 5 5 5 5 5 5 f . . . 
            . . . f b 5 f f f 5 5 5 f . . . 
            . . . f f f f 2 f f f f f . . . 
            . . . f f f f 2 4 f . . . . . . 
            . . . f 2 4 f f f f . . . . . . 
            . . . f f f f f . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f . . . . . . 
            . f c e e f c e e f . . . . . . 
            . f f f c e e f f f . . . . . . 
            . . . f f c f f f f . . . . . . 
            . . f f f f f f f . . . . . . . 
            . . f 2 4 4 4 f f f f f f . . . 
            . . f 2 4 4 4 f b 5 f 5 f . . . 
            . . f f f f f f b f f 5 f . . . 
            . . . f b 5 5 5 5 5 5 5 f . . . 
            . . f f f f 5 5 5 5 5 5 f . . . 
            . . f 2 4 f 5 5 5 f f f f . . . 
            . . f 2 4 f f f f f f . . . . . 
            . . f f f f f 2 4 4 f . . . . . 
            . . . . . . f f f f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f . . . . . . 
            . f c e e f c e e f . . . . . . 
            . f f f c e e f f f . . . . . . 
            . . . f f c f f f f . . . . . . 
            . . f f f f f f f . . . . . . . 
            . . f 2 4 4 4 f f f f f f . . . 
            . . f 2 4 4 4 f f b 5 f f . . . 
            . . f f f f f f f b 5 5 f . . . 
            . . . f b 5 5 5 f f b 5 f . . . 
            . . . f b 5 f f f f f f f . . . 
            . . f f f f f 2 4 f f f f . . . 
            . . f 2 4 4 f 2 4 f . . . . . . 
            . . f f f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        madchicken.setPosition(hops_and_paw.x + 30, hops_and_paw.y + 0)
        madchicken.follow(hops_and_paw, 75)
        madchicken.setStayInScreen(true)
    } else {
        info.changeLifeBy(-2)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hops_and_paw.vy == 0) {
        hops_and_paw.vy = -150
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    current_level += 1
    startlevel()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    game.over(false, effects.clouds)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    current_level += 1
    startlevel()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.badegg, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 500)
    info.changeScoreBy(5)
    enragedchicken = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.enragedchickon)
    animation.runImageAnimation(
    enragedchicken,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f . . . . . . 
        . f c e e f c e e f . . . . . . 
        . f f f c e e f f f . . . . . . 
        . . . f f c f f f f f f . . . . 
        . . f f f f f f f f c f . . . . 
        . . f 2 4 4 4 f f c c e f f . . 
        . . f 2 4 4 4 f c c f f e f . . 
        . . f f f f f f c f e e f f . . 
        . . f c c e e e e e e e e f . . 
        . . f c c e f f f e e e f f . . 
        . . f c f e f 2 f f e f f . . . 
        . . f f f f f 2 4 f f f . . . . 
        . . . f 2 4 f f f f . . . . . . 
        . . . f f f f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f . . . . . . 
        . f c e e f c e e f . . . . . . 
        . f f f c e e f f f . . . . . . 
        . . . f f c f f f f . . . . . . 
        . . f f f f f f f f f f f f . . 
        . . f 2 4 4 4 f f e f e f f . . 
        . . f 2 4 4 4 f c e f e e f . . 
        . . f f f f f f c f f e f f . . 
        . . f e c e e e e e e e e f . . 
        . . f f f f c e e e e e f f . . 
        . . f 2 4 f c e e e f e f . . . 
        . . f 2 4 f e f e f f f f . . . 
        . . f f f f f f f f f . . . . . 
        . . . . . . f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f . . . . . . 
        . f c e e f c e e f . . . . . . 
        . f f f c e e f f f . . . . . . 
        . . . f f c f f f f . . . . . . 
        . . f f f f f f f f f f . . . . 
        . . f 2 4 4 4 f f f c f f f . . 
        . . f 2 4 4 4 f f c c e e f . . 
        . . f f f f f f f c c e f f . . 
        . . f f c e e e f f c e e f . . 
        . . f c c e f f f f f f f f . . 
        . . f f f f f 2 4 f f f f . . . 
        . . f 2 4 4 f 2 4 f . . . . . . 
        . . f f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    enragedchicken.setPosition(hops_and_paw.x + 50, hops_and_paw.y + 0)
    enragedchicken.follow(hops_and_paw, 87.5)
    enragedchicken.setStayInScreen(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.egg, function (sprite, otherSprite) {
    otherSprite.destroy()
    chicken = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f . . . . . . . . 
        . . f b 5 5 5 f . . . . . . . . 
        . . f f 5 f 5 f f . . . . . . . 
        . f f f f f f f f . f f f . . . 
        . f 2 4 4 4 4 f f f f 5 f f . . 
        . f 2 4 4 4 4 f 5 5 5 5 5 f . . 
        . f 2 4 4 4 4 f 5 5 5 5 f f . . 
        . f f f f f f f 5 5 5 f f . . . 
        . . . . f b 5 5 5 5 5 f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f f 4 f f 4 f . . . . . 
        . . . . f b 4 f b 4 f . . . . . 
        . . . . f f f f f f f . . . . . 
        `, SpriteKind.cickom)
    animation.runImageAnimation(
    chicken,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f . . . . . . . 
        . . . f b 5 5 5 f . . . . . . . 
        . . . f f 5 f 5 f f f f . . . . 
        . . f f f f f f f f b f . . . . 
        . . f 2 4 4 4 f f b 5 f f . . . 
        . . f 2 4 4 4 f b 5 f f f . . . 
        . . f f f f f f b f f 5 f . . . 
        . . . f b 5 5 5 5 5 5 5 f . . . 
        . . . f b 5 f f f 5 5 5 f . . . 
        . . . f f f f 2 f f f f f . . . 
        . . . f f f f 2 4 f . . . . . . 
        . . . f 2 4 f f f f . . . . . . 
        . . . f f f f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f . . . . . . . 
        . . . f b 5 5 5 f . . . . . . . 
        . . . f f 5 f 5 f . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . . f 2 4 4 4 f f f f f f . . . 
        . . f 2 4 4 4 f b 5 f 5 f . . . 
        . . f f f f f f b f f 5 f . . . 
        . . . f b 5 5 5 5 5 5 5 f . . . 
        . . f f f f 5 5 5 5 5 5 f . . . 
        . . f 2 4 f 5 5 5 f f f f . . . 
        . . f 2 4 f f f f f f . . . . . 
        . . f f f f f 2 4 4 f . . . . . 
        . . . . . . f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f . . . . . . . 
        . . . f b 5 5 5 f . . . . . . . 
        . . . f f 5 f 5 f . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . . f 2 4 4 4 f f f f f f . . . 
        . . f 2 4 4 4 f f b 5 f f . . . 
        . . f f f f f f f b 5 5 f . . . 
        . . . f b 5 5 5 f f b 5 f . . . 
        . . . f b 5 f f f f f f f . . . 
        . . f f f f f 2 4 f f f f . . . 
        . . f 2 4 4 f 2 4 f . . . . . . 
        . . f f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    chicken.setPosition(hops_and_paw.x + 60, hops_and_paw.y + 0)
    chicken.follow(hops_and_paw, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.flower, function (sprite, otherSprite) {
    otherSprite.destroy()
    bees = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    animation.runImageAnimation(
    bees,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 9 9 . . . . . . . . 
        . . . . . . 9 6 . . . . . . . . 
        . . . . . 9 9 . . . . . . . . . 
        . . . 5 5 6 6 5 5 . . . . . . . 
        . . . 5 5 f f 5 5 . . . . . . . 
        . . . 5 5 f f 5 5 . . . . . . . 
        . . . 4 4 f f 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 9 9 . . . . . . . . 
        . . . . . . 9 6 . . . . . . . . 
        . . . 5 5 9 9 5 5 . . . . . . . 
        . . . 5 5 6 6 5 5 . . . . . . . 
        . . . 5 5 f f 5 5 . . . . . . . 
        . . . 4 4 f f 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 5 9 9 9 5 . . . . . . . 
        . . . 5 5 6 6 6 5 . . . . . . . 
        . . . 5 5 f f 5 5 . . . . . . . 
        . . . 4 4 f f 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 5 9 9 5 5 . . . . . . . 
        . . . 5 5 6 6 9 5 . . . . . . . 
        . . . 5 5 f f 6 5 . . . . . . . 
        . . . 4 4 f f 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 5 9 6 5 5 . . . . . . . 
        . . . 5 5 9 6 5 5 . . . . . . . 
        . . . 5 5 9 6 5 5 . . . . . . . 
        . . . 4 4 f f 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 5 9 9 5 5 . . . . . . . 
        . . . 5 5 6 6 9 5 . . . . . . . 
        . . . 5 5 f f 6 5 . . . . . . . 
        . . . 4 4 f f 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 5 9 9 9 5 . . . . . . . 
        . . . 5 5 6 6 6 5 . . . . . . . 
        . . . 5 5 f f 5 5 . . . . . . . 
        . . . 4 4 f f 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 9 9 . . . . . . . . 
        . . . . . . 9 6 . . . . . . . . 
        . . . 5 5 9 9 5 5 . . . . . . . 
        . . . 5 5 6 6 5 5 . . . . . . . 
        . . . 5 5 f f 5 5 . . . . . . . 
        . . . 4 4 f f 4 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    bees.setPosition(hops_and_paw.x + 80, hops_and_paw.y + 80)
    bees.follow(hops_and_paw)
})
function startlevel () {
    if (current_level == 0) {
        tiles.setTilemap(tilemap`level1`)
    } else if (current_level == 1) {
        tiles.setTilemap(tilemap`level2`)
    } else if (current_level == 2) {
        tiles.setTilemap(tilemap`level3`)
    } else if (current_level == 3) {
        tiles.setTilemap(tilemap`level9`)
    } else if (current_level == 4) {
        tiles.setTilemap(tilemap`level10`)
        scene.setBackgroundImage(img`
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccc66666666666cccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccc66666666666666666666ccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccc66666666666666666666666666ccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccc666666666666666666666666666cccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccc666666666666666666666666666666ccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccc6666666666666666668886666666666666ccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccc666666666666668888888888886666666666ccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccc66666666666688888888888888888666666666cccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccc66666666666688888888888888888886666666666ccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccc666666666668888888888888888888888666666666ccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccc6666666668888888888888888ddddddd88666666666cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccc6666666688888888888888888ddddddddd88666666666ccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccc6666666888888888888888888ddddddddd88866666666ccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccc6666668888888888888888888ddddddddd888866666666cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccc66666668888888888888888888ddddddddd888886666666cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc666666688888888888888888888ddddddddd888888666666cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc666666688888888888888888888ddddddddd888888666666cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc666666688888888888888888888ddddddddd888888866666cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc666666888888888888888888888ddddddddd888888866666cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc6666668888888888888888888888dddddddd888888866666cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc6666668888888888888888888888ddddddd8888888866666cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc666666888888888888888888888888888888888888866666cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc666666888888888888888888888888888888888888866666ccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc666666888888888888888888888888888888888888866666ccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc666666888888888888888888888888888888888888866666ccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc666666888888888888888887777788888888888888866666ccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc666666887777788877777877777788888888888888866666ccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc666666887777777777777777777788888888888888866666ccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc666666887777777777777777777777888888888888666666ccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccc66666687777777777777777777777777777778888666666ccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccc66666687777777777777777777777777777778888666666ccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccc66666667777777777777777777777777777778886666666ccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccc6666666777777777777777777777777777777888666666cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccc666666667777777777777777777777777777886666666cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccc666666667777777777777777777777777777866666666cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccc666666667777777777777777777777777777666666666ccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccc6666666677777777777777777777777777666666666cccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccc6666666667777777777777777777777776666666666cccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccc66666666667777777777777777777777666666666cccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccc6666666666677777777777777777777666666666ccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccc66666666666677777777777777777666666666cccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccc66666666666667777777777777776666666666cccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccc666666666666667777777777666666666666ccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccc66666666666666667777776666666666666cccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccc6666666666666666667666666666666666ccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccc66666666666666666666666666666666cccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccc666666666666666666666666666666ccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccc666666666666666666666666666ccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccc86666666666666666666666cccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccc666666666666666666cccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbcbbbbbbbbbbbbbccccccccccccccccc
            `)
    } else if (current_level == 5) {
        tiles.setTilemap(tilemap`level14`)
        scene.setBackgroundImage(img`
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccc66666666666cccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccc66666666666666666666ccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccc66666666666666666666666666ccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccc666666666666666666666666666cccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccc666666666666666666666666666666ccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccc6666666666666666668886666666666666ccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccc666666666666668888888888886666666666ccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccc66666666666688888888888888888666666666cccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccc66666666666688888888888888888886666666666ccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccc666666666668888888888888888888888666666666ccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccc6666666668888888888888888ddddddd88666666666cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccc6666666688888888888888888ddddddddd88666666666ccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccc6666666888888888888888888ddddddddd88866666666ccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccc6666668888888888888888888ddddddddd888866666666cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccc66666668888888888888888888ddddddddd888886666666cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc666666688888888888888888888ddddddddd888888666666cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc666666688888888888888888888ddddddddd888888666666cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc666666688888888888888888888ddddddddd888888866666cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc666666888888888888888888888ddddddddd888888866666cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc6666668888888888888888888888dddddddd888888866666cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc6666668888888888888888888888ddddddd8888888866666cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc666666888888888888888888888888888888888888866666cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc666666888888888888888888888888888888888888866666ccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc666666888888888888888888888888888888888888866666ccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc666666888888888888888888888888888888888888866666ccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc666666888888888888888887777788888888888888866666ccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc666666887777788877777877777788888888888888866666ccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc666666887777777777777777777788888888888888866666ccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccc666666887777777777777777777777888888888888666666ccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccc66666687777777777777777777777777777778888666666ccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccc66666687777777777777777777777777777778888666666ccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccc66666667777777777777777777777777777778886666666ccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccc6666666777777777777777777777777777777888666666cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccc666666667777777777777777777777777777886666666cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccc666666667777777777777777777777777777866666666cccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccc666666667777777777777777777777777777666666666ccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccc6666666677777777777777777777777777666666666cccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccc6666666667777777777777777777777776666666666cccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccc66666666667777777777777777777777666666666cccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccc6666666666677777777777777777777666666666ccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccc66666666666677777777777777777666666666cccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccc66666666666667777777777777776666666666cccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccc666666666666667777777777666666666666ccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccc66666666666666667777776666666666666cccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccc6666666666666666667666666666666666ccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccc66666666666666666666666666666666cccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccc666666666666666666666666666666ccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccc666666666666666666666666666ccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccc86666666666666666666666cccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccc666666666666666666cccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            cccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccc
            ccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbcbbbbbbbbbbbbbccccccccccccccccc
            `)
    } else {
        game.over(true)
    }
    scene.cameraFollowSprite(hops_and_paw)
    info.setLife(5)
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.coin)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.flower)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.fireball)) {
        value.destroy()
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
        mean_egg = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f f 5 5 5 5 5 5 f f . . . 
            . . f f 5 5 5 4 4 5 5 5 f f . . 
            . . f 5 5 5 5 4 4 5 5 5 5 f . . 
            . . f 5 5 5 5 4 4 5 5 5 5 f . . 
            . . f 5 5 5 5 4 4 5 5 5 5 f . . 
            . . f 5 5 5 5 4 4 5 5 5 5 f . . 
            . . f 5 5 5 5 4 4 5 5 5 5 f . . 
            . . f 5 5 5 5 4 4 5 5 5 5 f . . 
            . . f f 5 5 5 4 4 5 5 5 f f . . 
            . . . f f 5 5 5 5 5 5 f f . . . 
            . . . . f f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.coin)
        animation.runImageAnimation(
        mean_egg,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 5 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 4 4 5 5 5 f . . . 
            . . . f 5 5 5 4 4 5 5 5 f . . . 
            . . . f 5 5 5 4 4 5 5 5 f . . . 
            . . . f 5 5 5 4 4 5 5 5 f . . . 
            . . . f 5 5 5 4 4 5 5 5 f . . . 
            . . . f 5 5 5 4 4 5 5 5 f . . . 
            . . . f 5 5 5 4 4 5 5 5 f . . . 
            . . . . f 5 5 5 5 5 5 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 5 5 5 5 5 5 f . . . . 
            . . . . f 5 5 4 4 5 5 f . . . . 
            . . . . f 5 5 4 4 5 5 f . . . . 
            . . . . f 5 5 4 4 5 5 f . . . . 
            . . . . f 5 5 4 4 5 5 f . . . . 
            . . . . f 5 5 4 4 5 5 f . . . . 
            . . . . f 5 5 4 4 5 5 f . . . . 
            . . . . f 5 5 4 4 5 5 f . . . . 
            . . . . f 5 5 5 5 5 5 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f 5 5 5 5 f . . . . . 
            . . . . . f 5 4 4 5 f . . . . . 
            . . . . . f 5 4 4 5 f . . . . . 
            . . . . . f 5 4 4 5 f . . . . . 
            . . . . . f 5 4 4 5 f . . . . . 
            . . . . . f 5 4 4 5 f . . . . . 
            . . . . . f 5 4 4 5 f . . . . . 
            . . . . . f 5 4 4 5 f . . . . . 
            . . . . . f 5 5 5 5 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . f 5 5 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 5 5 f . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 4 f . . . . . . 
            . . . . . . . f 4 f . . . . . . 
            . . . . . . . f 4 f . . . . . . 
            . . . . . . . f 4 f . . . . . . 
            . . . . . . . f 4 f . . . . . . 
            . . . . . . . f 4 f . . . . . . 
            . . . . . . . f 4 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f 4 f . . . . . . 
            . . . . . . . f 4 f . . . . . . 
            . . . . . . . f 4 f . . . . . . 
            . . . . . . . f 4 f . . . . . . 
            . . . . . . . f 4 f . . . . . . 
            . . . . . . . f 4 f . . . . . . 
            . . . . . . . f 4 f . . . . . . 
            . . . . . . . f 5 f . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . f 5 5 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 4 4 f . . . . . . 
            . . . . . . f 5 5 f . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . f 5 5 5 5 f . . . . . 
            . . . . . f 5 4 4 5 f . . . . . 
            . . . . . f 5 4 4 5 f . . . . . 
            . . . . . f 5 4 4 5 f . . . . . 
            . . . . . f 5 4 4 5 f . . . . . 
            . . . . . f 5 4 4 5 f . . . . . 
            . . . . . f 5 4 4 5 f . . . . . 
            . . . . . f 5 4 4 5 f . . . . . 
            . . . . . f 5 5 5 5 f . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(mean_egg, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
        eggz = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 4 4 4 4 . . . . . . . . 
            . . . 2 2 5 5 4 4 . . . . . . . 
            . . . 2 5 4 4 5 4 . . . . . . . 
            . . . 2 5 4 4 5 4 . . . . . . . 
            . . . 2 2 5 5 2 4 . . . . . . . 
            . . . . 2 2 2 2 . . . . . . . . 
            . . . . . 6 7 . . . . . . . . . 
            . . . 7 7 7 7 . . . . . . . . . 
            . . . 6 6 6 7 . . . . . . . . . 
            . . . . . 6 7 7 7 7 . . . . . . 
            . . . . . 6 6 7 6 6 7 . . . . . 
            . . . . . . 6 7 . . 6 . . . . . 
            . . . . . . 6 7 . . . . . . . . 
            . . . . . . 6 7 . . . . . . . . 
            `, SpriteKind.flower)
        tiles.placeOnTile(eggz, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile14`)) {
        fireball = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f f . . . . 
            . . . f f 4 4 4 4 4 4 f f . . . 
            . . f f 4 4 5 5 5 5 4 4 f f . . 
            . f f 4 4 5 5 2 2 5 5 4 4 f f . 
            . f 4 4 5 5 2 2 2 2 5 5 4 4 f . 
            . f 4 5 5 2 2 2 2 2 2 5 5 4 f . 
            . f 4 5 2 2 2 2 2 2 2 2 5 4 f . 
            . f 4 5 5 2 2 2 2 2 2 2 5 4 f . 
            . f 4 4 5 5 2 2 2 2 2 5 5 4 f . 
            . f 4 4 4 5 5 2 2 2 5 5 4 4 f . 
            . f 4 f 4 4 5 5 5 5 5 4 4 f f . 
            . f 4 f f 4 4 4 4 4 4 4 f f . . 
            . f f f f 4 f 4 4 4 f 4 f . . . 
            . . . . f f f 4 f 4 f f f . . . 
            . . . . . . f f f f f . . . . . 
            `, SpriteKind.fireball)
        tiles.placeOnTile(fireball, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runMovementAnimation(
        fireball,
        "c 0 -100  0 100 0 0",
        2000,
        true
        )
        fireball.startEffect(effects.fire)
    }
    tiles.placeOnRandomTile(hops_and_paw, assets.tile`myTile8`)
    for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        eggz = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f f d d d 1 f f . . . . . 
            . . f f d d d d 1 1 f f . . . . 
            . . f b d d d d d 1 1 f . . . . 
            . . f b d d d d d d d f . . . . 
            . . f b d d d d d d d f . . . . 
            . . f b d d d d d d d f . . . . 
            . . f b d d d d d d d f . . . . 
            . . f b d d d d d d d f . . . . 
            . . f b d d d d d d d f . . . . 
            . . f b b d d d d d d f . . . . 
            . . f f b b b b b b f f . . . . 
            . . . f f f f f f f f . . . . . 
            `, SpriteKind.egg)
        tiles.placeOnTile(eggz, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.over(false, effects.clouds)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.maddestchicken, function (sprite, otherSprite) {
    if (hops_and_paw.y < madchicken.y) {
        otherSprite.destroy(effects.spray, 500)
        info.changeScoreBy(5)
    } else {
        info.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fireball, function (sprite, otherSprite) {
    info.changeLifeBy(-2)
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.adchicken, function (sprite, otherSprite) {
    if (hops_and_paw.y < madchicken.y) {
        otherSprite.destroy(effects.spray, 500)
        info.changeScoreBy(5)
        game.splash("take a breather :)", "You ready?")
        for (let value of tiles.getTilesByType(assets.tile`myTile24`)) {
            mean_egg = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f . . f f f . . . . 
                . . . f f 3 f . . f 3 f f . . . 
                . . f f 3 3 f . . f 3 3 f f . . 
                . . f 3 3 f f f f f f 3 3 f . . 
                . . f 3 3 f f f f f 3 3 3 f . . 
                . . f f 3 3 3 f f 3 3 3 f f . . 
                . . . f f 3 f f f f 3 f f . . . 
                . . . f f f f 5 5 f f f f . . . 
                . . . f 2 4 4 4 5 5 2 4 f . . . 
                . . . f 2 2 4 4 5 5 2 4 f . . . 
                . . . f 5 2 4 5 5 2 2 4 f . . . 
                . . . f 5 2 4 5 2 2 4 4 f . . . 
                . . . f f 2 4 5 2 4 4 f f . . . 
                . . . . f f 4 5 2 4 f f . . . . 
                . . . . . f f f f f f . . . . . 
                `, SpriteKind.badegg)
            tiles.placeOnTile(mean_egg, value)
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
    } else {
        info.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (hops_and_paw.y < bees.y) {
        otherSprite.destroy(effects.spray, 500)
        info.changeScoreBy(5)
    } else {
        info.changeLifeBy(-1)
    }
})
let fireball: Sprite = null
let eggz: Sprite = null
let mean_egg: Sprite = null
let bees: Sprite = null
let madchicken: Sprite = null
let chicken: Sprite = null
let enragedchicken: Sprite = null
let hops_and_paw: Sprite = null
let current_level = 0
current_level = 0
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111199999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999111111999999999999999999999999999999111111111111199999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999911111111199999999999999999999999999991111111111111199999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999111111111119999999999999999999999999991111111111111199999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999991111111111119999999999999999999999999991111111111111999999999999999999999911199999999999999999999999999999999
    9999999999999999999999999999999999999999999999999911111111111119999999999999999999999999999111111111119999999999999999991111111111119999999999999999999999999999
    9999999999999999999999999999999999999999999999111111111111111119999999999999999999999999999991119911999999999999999991111111111111111119999999999999999999999999
    9999999999999999999999999999999999999999999911111111111111111111111111119999999999999999999999999999999999999999991111111111111111111111999999999999999999999999
    9999999999999999999999999999999999999999999111111111111111111111111111111999999999999999999999999999999999999999911111111111111111111111999999999999999999999999
    9999999999999999999999999999999999999999991111111111111111111111111111111199999999999999999999999999999999999999911111111111111111111111199999999999999999999999
    9999999999999999999991111119999999999999911111111111111111111111111111111199999999999999999999999999999999999999111111111111111111111111199999999999999999999999
    9999999999999999999911111119999999999999911111111111111111111111111111111199999999999999999999999999999999999999111111111111111111111111199999999999999999999999
    9999999999999999999111111111999999999999911111111111111111111111111111111999999999999999999999999999999999999999111111111111111111111111199999999999999999999999
    9999999999999911199111111111999999999999911111111111111111111111111111111999999999999999999999999999999999999999911111111111111111111111999999999999999999999999
    9999999999999111111111111111999999999999911111111111111111111111111111111999999999999999999999999999999999999999911111111111111111111119999999999999999999999999
    9999999999991111111111111111999999999999991111111111111111111111111111119999999999999999999999999999999999999999991111111111111111111199999999999999999999999999
    9999999999911111111111111111999999999999991111111111111111111111111111119999999999999999999999999999999999999999999911111111111111199999999999999999999999999999
    9999999999111111111111111111999999999999991111111111111111111111111111199999999999999999999999999999999999999999999999999111111111999999999999999999999999999999
    9999999999111111111111111111999999999999999111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999111111111111111111999999999999999111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999111111111111111111999999999999999991111111111111111111119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999111111111111111111999999999999999999911111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999111111111111111111999999999999999999999911111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999111111111111111199999999999999999999999999911199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999911111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999966699999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999996666699999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999996666669999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999966666666999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999666666666999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999969999999999999999999999999999999999999999999999666666666699999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999969999999999999999999999999999999999999999999999666666666699999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999966699999999999999999999999999999999999999999966666666666669999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999666669999999999999999999999999999999999999999966666666666666999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999666666999999999999999999999999999999999999999966666666666666999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999996666666699999999999999999999999999999999999999966666666666666699999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999996666666669999999999999999999999999999999999999666666666666666699999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999966666666666999999999999999999999999999999999999666666666666666669999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999966666666666699999999999999999999999999999999999666666666666666666999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999666666666666669999999999999999999999999999999996666666666666666666999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999666666666666666699999999999999999999999999999996666666666666666666699999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999666666666666666666999999999999999999999999999966666666666666666666669999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999996666666666666666666699999999999999999999999999966666666666666666666666999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999996666666666666666666666999999999999999999999999966666666666666666666666999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999996666666666666666666666699999999999999999999999966666666666666666666666699999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999996666666666666666666666666999999999999999999999666666666666666666666666669999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999996666666666666666666666666699999999999999999999666666666666666666666666666999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999996666666666666666666666666669999999999999999996666666666666666666666666666999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999966666666666666666666666666666999999999999999996666666666666666666666666666699999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999966666666666666666666666666666699999999999999996666666666666666666666666666669999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999666666666666666666666666666666666999999999999996666666666666666666666666666666999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999666666666666666666666666666666666669999999999966666666666666666666666666666666699999999999999999999999999999999999999999999999999999999999
    9999999999999999999996666666666666666666666666666666666666999999999966666666666666666666666666666666669999999999999999999999999999999999999999999999999999999999
    9999999999999999999966666666666666666666666666666666666666669999999966666666666666666666666666666666666999999999999999996666999999999999999999999999999999999999
    9999999999999999999966666666666666666666666666666666666666666699999666666666666666666666666666666666666699999999999999996666699999999999999999999999999999999999
    9999999999999999999666666666666666666666666666666666666666666666999666666666666666666666666666666666666669999999999999666666699999999999999999999999999999999999
    9999999999999999999666666666666666666666666666666666666666666666669666666666666666666666666666666666666666999999999999666666669999999999999999999999999999999999
    9999999999999999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999996666666666999999999999999999999999999999999
    9999999999999996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999996666666666666999999999999999999999999999999
    9999999999999996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999966666666666666999999999999999999999999999999
    9999999999999966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999666666666666666699999999999999999999999999999
    9999999999999966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999996666666666666666669999999999999999999999999999
    9999999999999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699666666666666666666666999999999999999999999999999
    9999999999996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999999999999999999999
    9999999999996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999999
    9999999999966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999999999999999999999999
    9999999999966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999999999999999999999999
    9999999999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999999999999999999
    9999999999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999999999
    9999999996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999999999999999999999
    9999999996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999999999999999
    9999999966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999999999999999999
    9999999966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999999999999
    9999999966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999999
    9999999966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999999999999999
    9999999966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999999999
    9999999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999999
    9999999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999999
    9999996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999999
    9999996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699999999
    9999966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999999
    9999666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999999
    9996666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666669999
    9966666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666999
    9666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666699
    9666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    `)
scene.setBackgroundColor(6)
hops_and_paw = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ...................f....
    .........fff.......fff..
    ........ff.f.......ff5f.
    ........f..........fffff
    ........f.........ffffff
    ........ffffffffffffff..
    .........ffffffffffff...
    ..........fffffffffff...
    ..........f.f.....f.f...
    ..........f.f.....f.f...
    `, SpriteKind.Player)
controller.moveSprite(hops_and_paw, 80, 0)
hops_and_paw.setFlag(SpriteFlag.BounceOnWall, false)
startlevel()
game.onUpdate(function () {
    hops_and_paw.setImage(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        ...................f....
        .........fff.......fff..
        ........ff.f.......ff5f.
        ........f..........fffff
        ........f.........ffffff
        ........ffffffffffffff..
        .........ffffffffffff...
        ..........fffffffffff...
        ..........ff.......ff...
        `)
    if (hops_and_paw.vy < 0) {
        hops_and_paw.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . f . . . . 
            . . . . . . . . . . . f f f . . 
            . . . . . . . . . . . f f 5 f . 
            . . . f . . . . . . f f f f f f 
            . . . f . . . . . . f f f f . . 
            . . f f . . . . . f f f f . . . 
            . . f . . . . . . f f f f f f f 
            . . f . . . . . f f f f f . . . 
            . . f f . . . f f f f f f f f . 
            . . . f f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f f . f . . . . . . . 
            . . . . . f . . f . . . . . . . 
            . . . . . f . . . . . . . . . . 
            `)
    } else if (hops_and_paw.vy > 0) {
        hops_and_paw.setImage(img`
            . . . . . . . f . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f f . . . . . . . . . 
            . . . . . f . . . . . . . . . . 
            . . . . . f . . . . . . . . . . 
            . . . . . f f . . . . . . . . . 
            . . . . f f f . . . . . . . . . 
            . . . . f f f f . . . . . . . . 
            . . . . f f f f . . . . . . . . 
            . . . . f f f f f . . . f . . . 
            . . . . f . f f f f f f f f f . 
            . . . . f . f . f f f f f f 5 f 
            . . . . . . . . f f f f f f f f 
            . . . . . . . . f . f . . . . . 
            . . . . . . . . f . f . . . . . 
            . . . . . . . . f . f f . . . . 
            `)
    } else if (hops_and_paw.x % 2 == 0) {
        hops_and_paw.setImage(img`
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ...................f....
            .........fff.......fff..
            ........ff.f.......ff5f.
            ........f..........fffff
            ........f.........ffffff
            ........ffffffffffffff..
            .........ffffffffffff...
            ..........fffffffffff...
            ..........f.f.....f.f...
            `)
    } else {
    	
    }
    if ((hops_and_paw.isHittingTile(CollisionDirection.Left) || hops_and_paw.isHittingTile(CollisionDirection.Right)) && hops_and_paw.vy >= 0) {
        hops_and_paw.vy = 0
        hops_and_paw.ay = 0
        hops_and_paw.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . f f . . 
            . . . . . . . . . . . f 5 f . . 
            . . . . . . . . . . . f f f . . 
            . . . . . . . . . . f f f f . . 
            . . . . . . . . . . . . f f f f 
            . . . . . . . . . . . . f f . . 
            . . . . . . . f . . . . f f f f 
            . . . . . . . f . . . . f f . . 
            . . . . . . . f . . . . f f f f 
            . . . . . . . f f . . . f f . . 
            . . . . . . . . f f f f f f f f 
            `)
    } else {
        hops_and_paw.ay = 350
    }
    if (hops_and_paw.vx < 0 || hops_and_paw.isHittingTile(CollisionDirection.Left)) {
        hops_and_paw.image.flipX()
        hops_and_paw.setImage(hops_and_paw.image)
    }
})
