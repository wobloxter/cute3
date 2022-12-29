let sonar = 0
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    basic.showString("" + (sonar))
})
basic.forever(function () {
    if (sonar < 5) {
        cuteBot.moveTime(cuteBot.Direction.backward, 50, 0.5)
    }
})
