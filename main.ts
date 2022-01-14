function closeVent () {
    ventEnabled = false
    leftDoor3 = sprites.create(assets.image`ventClosed`, SpriteKind.Projectile)
    leftDoor3.y = 10
    leftDoor3.x = 80
    powerFull3 = sprites.create(assets.image`PowerFull`, SpriteKind.Projectile)
    powerFull3.x = 79
    powerFull3.y = 52
    pause(3333)
    powerFull3.destroy()
    powerHalf3 = sprites.create(assets.image`PowerHalf`, SpriteKind.Projectile)
    powerHalf3.x = 79
    powerHalf3.y = 52
    pause(3333)
    powerHalf3.destroy()
    powerLow3 = sprites.create(assets.image`PowerLow`, SpriteKind.Projectile)
    powerLow3.x = 79
    powerLow3.y = 52
    pause(3333)
    powerLow3.destroy()
    leftDoor3.destroy()
    powerOff3 = sprites.create(assets.image`PowerOff`, SpriteKind.Projectile)
    powerOff3.x = 79
    powerOff3.y = 52
    pause(5000)
    powerOff3.destroy()
    powerCharge13 = sprites.create(assets.image`PowerLow`, SpriteKind.Projectile)
    powerCharge13.x = 79
    powerCharge13.y = 52
    pause(500)
    powerCharge23 = sprites.create(assets.image`PowerHalf`, SpriteKind.Projectile)
    powerCharge23.x = 79
    powerCharge23.y = 52
    pause(500)
    powerCharge33 = sprites.create(assets.image`PowerFull`, SpriteKind.Projectile)
    powerCharge33.x = 79
    powerCharge33.y = 52
    pause(1000)
    powerCharge33.destroy()
    powerCharge23.destroy()
    powerCharge13.destroy()
    rightDoorEnabled = true
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ventEnabled = true) {
        closeVent()
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (rightDoorEnabled = true) {
        closeRightDoor()
    }
})
function closeRightDoor () {
    rightDoorEnabled = false
    leftDoor2 = sprites.create(assets.image`rightDoorClosed`, SpriteKind.Projectile)
    leftDoor2.y = 51
    leftDoor2.x = 148
    powerFull2 = sprites.create(assets.image`PowerFull`, SpriteKind.Projectile)
    powerFull2.x = 117
    powerFull2.y = 52
    pause(3333)
    powerFull2.destroy()
    powerHalf2 = sprites.create(assets.image`PowerHalf`, SpriteKind.Projectile)
    powerHalf2.x = 117
    powerHalf2.y = 52
    pause(3333)
    powerHalf2.destroy()
    powerLow2 = sprites.create(assets.image`PowerLow`, SpriteKind.Projectile)
    powerLow2.x = 117
    powerLow2.y = 52
    pause(3333)
    powerLow2.destroy()
    leftDoor2.destroy()
    powerOff2 = sprites.create(assets.image`PowerOff`, SpriteKind.Projectile)
    powerOff2.x = 117
    powerOff2.y = 52
    pause(5000)
    powerOff2.destroy()
    powerCharge12 = sprites.create(assets.image`PowerLow`, SpriteKind.Projectile)
    powerCharge12.x = 117
    powerCharge12.y = 52
    pause(500)
    powerCharge22 = sprites.create(assets.image`PowerHalf`, SpriteKind.Projectile)
    powerCharge22.x = 117
    powerCharge22.y = 52
    pause(500)
    powerCharge32 = sprites.create(assets.image`PowerFull`, SpriteKind.Projectile)
    powerCharge32.x = 117
    powerCharge32.y = 52
    pause(1000)
    powerCharge32.destroy()
    powerCharge22.destroy()
    powerCharge12.destroy()
    rightDoorEnabled = true
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (leftDoorEnabled = true) {
        closeLeftDoor()
    }
})
function closeLeftDoor () {
    leftDoorEnabled = false
    leftOpen = false
    leftDoor = sprites.create(assets.image`leftDoorClosed`, SpriteKind.Projectile)
    leftDoor.y = 53
    leftDoor.x = 13
    powerFull = sprites.create(assets.image`PowerFull`, SpriteKind.Projectile)
    powerFull.x = 38
    powerFull.y = 52
    pause(3333)
    powerFull.destroy()
    powerHalf = sprites.create(assets.image`PowerHalf`, SpriteKind.Projectile)
    powerHalf.x = 38
    powerHalf.y = 52
    pause(3333)
    powerHalf.destroy()
    powerLow = sprites.create(assets.image`PowerLow`, SpriteKind.Projectile)
    powerLow.x = 38
    powerLow.y = 52
    pause(3333)
    powerLow.destroy()
    leftDoor.destroy()
    leftOpen = true
    powerOff = sprites.create(assets.image`PowerOff`, SpriteKind.Projectile)
    powerOff.x = 38
    powerOff.y = 52
    pause(5000)
    powerOff.destroy()
    powerCharge1 = sprites.create(assets.image`PowerLow`, SpriteKind.Projectile)
    powerCharge1.x = 38
    powerCharge1.y = 52
    pause(500)
    powerCharge2 = sprites.create(assets.image`PowerHalf`, SpriteKind.Projectile)
    powerCharge2.x = 38
    powerCharge2.y = 52
    pause(500)
    powerCharge3 = sprites.create(assets.image`PowerFull`, SpriteKind.Projectile)
    powerCharge3.x = 38
    powerCharge3.y = 52
    pause(1000)
    powerCharge3.destroy()
    powerCharge2.destroy()
    powerCharge1.destroy()
    leftDoorEnabled = true
}
let powerCharge3: Sprite = null
let powerCharge2: Sprite = null
let powerCharge1: Sprite = null
let powerOff: Sprite = null
let powerLow: Sprite = null
let powerHalf: Sprite = null
let powerFull: Sprite = null
let leftDoor: Sprite = null
let powerCharge32: Sprite = null
let powerCharge22: Sprite = null
let powerCharge12: Sprite = null
let powerOff2: Sprite = null
let powerLow2: Sprite = null
let powerHalf2: Sprite = null
let powerFull2: Sprite = null
let leftDoor2: Sprite = null
let powerCharge33: Sprite = null
let powerCharge23: Sprite = null
let powerCharge13: Sprite = null
let powerOff3: Sprite = null
let powerLow3: Sprite = null
let powerHalf3: Sprite = null
let powerFull3: Sprite = null
let leftDoor3: Sprite = null
let leftOpen = false
let ventEnabled = false
let leftDoorEnabled = false
let rightDoorEnabled = false
// story.printText("bug alert: do not spam doors it makes door break", 80, 60, 1, 0, story.TextSpeed.Slow)
rightDoorEnabled = true
leftDoorEnabled = true
ventEnabled = true
let ventOpen = 1
let rightOpen = 1
let background = sprites.create(assets.image`bg`, SpriteKind.Projectile)
let bonnieDoor = 0
if (bonnieDoor && leftOpen) {
    background.destroy()
    story.printText("Bonnie got you!", 80, 60, 1, 0)
}
game.onUpdate(function () {
    if (bonnieDoor && leftOpen) {
        background.destroy()
        game.over(false)
        game.reset()
        story.printText("Bonnie got you!", 80, 60, 1, 0)
    }
})
while (bonnieDoor && leftOpen) {
    background.destroy()
    game.over(false)
    game.reset()
    story.printText("Bonnie got you!", 80, 60, 1, 0)
}