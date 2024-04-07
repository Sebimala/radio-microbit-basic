input.onButtonPressed(Button.A, function () {
    led.setBrightness(led.brightness() + 50)
})
input.onButtonPressed(Button.B, function () {
    led.setBrightness(led.brightness() - 50)
})
let Y = 0
let X = 0
led.setBrightness(0)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    if (input.acceleration(Dimension.X) > -123 && input.acceleration(Dimension.X) < 123) {
        X = 2
    }
    if (input.acceleration(Dimension.X) > 123 && input.acceleration(Dimension.X) < 573) {
        X = 3
    }
    if (input.acceleration(Dimension.X) > 573 && input.acceleration(Dimension.X) < 1023) {
        X = 4
    }
    if (input.acceleration(Dimension.Y) > -123 && input.acceleration(Dimension.Y) < 123) {
        Y = 2
    }
    if (input.acceleration(Dimension.Y) > 123 && input.acceleration(Dimension.Y) < 573) {
        Y = 3
    }
    if (input.acceleration(Dimension.Y) > 573 && input.acceleration(Dimension.Y) < 1023) {
        Y = 4
    }
})
