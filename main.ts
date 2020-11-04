input.onButtonPressed(Button.A, function () {
    basic.showNumber(Temperature)
})
function Temperature_sensor () {
    Temperature = input.temperature()
    Fahrenheit = 1.8 * Temperature + 32
    if (Temperature > 38) {
        serial.writeValue("Temperature", Temperature)
        radio.sendString("Danger")
    }
}
radio.onReceivedString(function (receivedString) {
    basic.pause(100)
    images.createImage(`
        # . . . #
        . # # # .
        . # # # .
        . # # # .
        # . # . #
        `).showImage(0)
    music.playMelody("C C C C C C C C ", 120)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Fahrenheit)
})
let Fahrenheit = 0
let Temperature = 0
radio.setGroup(1)
basic.forever(function () {
    Temperature_sensor()
})
