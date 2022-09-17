input.onButtonPressed(Button.A, function () {
    isPlaying = 1
    song = 1
})
input.onButtonPressed(Button.AB, function () {
    isPlaying = 0
})
input.onButtonPressed(Button.B, function () {
    isPlaying = 1
    song = 2
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.sad.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
input.onLogoEvent(TouchButtonEvent.Released, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.giggle.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
let song = 0
let isPlaying = 0
music.setVolume(255)
isPlaying = 0
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
    if (isPlaying) {
        if (song == 1) {
            music.playMelody("D E D C5 D E D E ", 240)
        } else if (song == 2) {
            music.playMelody("C5 B A G F E D C ", 420)
        } else {
        	
        }
    }
})
