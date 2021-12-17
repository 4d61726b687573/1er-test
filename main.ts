for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.StickFigure)
    basic.pause(100)
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        # # . # #
        . . . . .
        `)
    basic.pause(100)
}
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("Je m'appelle Marc")
    } else if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # # # # #
            # . . . #
            # . . . #
            `)
        basic.pause(1500)
    } else {
        while (!(input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B))) {
            basic.showString("Bonjour!")
        }
    }
})
