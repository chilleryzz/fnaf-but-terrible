//story.printText("bug alert: do not spam doors it makes door break", 80, 60, 1, 0, story.TextSpeed.Slow)
let rightDoorEnabled = true
let leftDoorEnabled = true
let ventEnabled = true
let ventOpen = true
let leftOpen = true
let rightOpen = true
let bonnieDoor = false
function closeLeftDoor () {
	leftDoorEnabled = false
    leftOpen = false
    let leftDoor = sprites.create(assets.image`leftDoorClosed`, SpriteKind.Projectile)
    leftDoor.y = 53
    leftDoor.x = 13
    let powerFull = sprites.create(assets.image`PowerFull`, SpriteKind.Projectile)
    powerFull.x = 38
    powerFull.y = 52
    pause(3333)
    powerFull.destroy()
    let powerHalf = sprites.create(assets.image`PowerHalf`, SpriteKind.Projectile)
    powerHalf.x = 38
    powerHalf.y = 52
    pause(3333)
    powerHalf.destroy()
    let powerLow = sprites.create(assets.image`PowerLow`, SpriteKind.Projectile)
    powerLow.x = 38
    powerLow.y = 52
    pause(3333)
    powerLow.destroy()
    leftDoor.destroy()
    leftOpen = true
    let powerOff = sprites.create(assets.image`PowerOff`, SpriteKind.Projectile)
    powerOff.x = 38
    powerOff.y = 52
    pause(5000)
    powerOff.destroy()
    let powerCharge1 = sprites.create(assets.image`PowerLow`, SpriteKind.Projectile)
    powerCharge1.x = 38
    powerCharge1.y = 52
    pause(500)
    let powerCharge2 = sprites.create(assets.image`PowerHalf`, SpriteKind.Projectile)
    powerCharge2.x = 38
    powerCharge2.y = 52
    pause(500)
    let powerCharge3 = sprites.create(assets.image`PowerFull`, SpriteKind.Projectile)
    powerCharge3.x = 38
    powerCharge3.y = 52
    pause(1000)
    powerCharge3.destroy()
    powerCharge2.destroy()
    powerCharge1.destroy()
    leftDoorEnabled = true
}
function closeRightDoor() {
    rightDoorEnabled = false
    let leftDoor = sprites.create(assets.image`rightDoorClosed`, SpriteKind.Projectile)
    leftDoor.y = 51
    leftDoor.x = 148
    let powerFull = sprites.create(assets.image`PowerFull`, SpriteKind.Projectile)
    powerFull.x = 117
    powerFull.y = 52
    pause(3333)
    powerFull.destroy()
    let powerHalf = sprites.create(assets.image`PowerHalf`, SpriteKind.Projectile)
    powerHalf.x = 117
    powerHalf.y = 52
    pause(3333)
    powerHalf.destroy()
    let powerLow = sprites.create(assets.image`PowerLow`, SpriteKind.Projectile)
    powerLow.x = 117
    powerLow.y = 52
    pause(3333)
    powerLow.destroy()
    leftDoor.destroy()

    let powerOff = sprites.create(assets.image`PowerOff`, SpriteKind.Projectile)
    powerOff.x = 117
    powerOff.y = 52
    pause(5000)
    powerOff.destroy()
    let powerCharge1 = sprites.create(assets.image`PowerLow`, SpriteKind.Projectile)
    powerCharge1.x = 117
    powerCharge1.y = 52
    pause(500)
    let powerCharge2 = sprites.create(assets.image`PowerHalf`, SpriteKind.Projectile)
    powerCharge2.x = 117
    powerCharge2.y = 52
    pause(500)
    let powerCharge3 = sprites.create(assets.image`PowerFull`, SpriteKind.Projectile)
    powerCharge3.x = 117
    powerCharge3.y = 52
    pause(1000)
    powerCharge3.destroy()
    powerCharge2.destroy()
    powerCharge1.destroy()
    rightDoorEnabled = true
}
function closeVent() {
    ventEnabled = false
    let leftDoor = sprites.create(assets.image`ventClosed`, SpriteKind.Projectile)
    leftDoor.y = 10
    leftDoor.x = 80
    let powerFull = sprites.create(assets.image`PowerFull`, SpriteKind.Projectile)
    powerFull.x = 79
    powerFull.y = 52
    pause(3333)
    powerFull.destroy()
    let powerHalf = sprites.create(assets.image`PowerHalf`, SpriteKind.Projectile)
    powerHalf.x = 79
    powerHalf.y = 52
    pause(3333)
    powerHalf.destroy()
    let powerLow = sprites.create(assets.image`PowerLow`, SpriteKind.Projectile)
    powerLow.x = 79
    powerLow.y = 52
    pause(3333)
    powerLow.destroy()
    leftDoor.destroy()
    let powerOff = sprites.create(assets.image`PowerOff`, SpriteKind.Projectile)
    powerOff.x = 79
    powerOff.y = 52
    pause(5000)
    powerOff.destroy()
    let powerCharge1 = sprites.create(assets.image`PowerLow`, SpriteKind.Projectile)
    powerCharge1.x = 79
    powerCharge1.y = 52
    pause(500)
    let powerCharge2 = sprites.create(assets.image`PowerHalf`, SpriteKind.Projectile)
    powerCharge2.x = 79
    powerCharge2.y = 52
    pause(500)
    let powerCharge3 = sprites.create(assets.image`PowerFull`, SpriteKind.Projectile)
    powerCharge3.x = 79
    powerCharge3.y = 52
    pause(1000)
    powerCharge3.destroy()
    powerCharge2.destroy()
    powerCharge1.destroy()
    rightDoorEnabled = true
}

controller.B.onEvent(ControllerButtonEvent.Pressed, function() {
    if (rightDoorEnabled = true) {
        closeRightDoor()
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function() {
    if (ventEnabled = true) {
        closeVent()
    }
})
let background = sprites.create(assets.image`bg`, SpriteKind.Projectile)
controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
    if (leftDoorEnabled = true) {
        closeLeftDoor()
    }
})
if (bonnieDoor && leftOpen) {
    background.destroy()
    story.printText("Bonnie got you!", 80, 60, 1, 0)
}
pause(5000)
bonnieDoor = true
game.onUpdate(function() {
    if (bonnieDoor && leftOpen) {
        background.destroy()
        story.printText("Bonnie got you!", 80, 60, 1, 0)
    }
})