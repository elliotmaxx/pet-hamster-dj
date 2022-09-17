def on_gesture_shake():
    basic.show_icon(IconNames.SAD)
    soundExpression.sad.play_until_done()
    basic.show_icon(IconNames.ASLEEP)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_logo_released():
    basic.show_icon(IconNames.HAPPY)
    soundExpression.giggle.play_until_done()
    basic.show_icon(IconNames.ASLEEP)
input.on_logo_event(TouchButtonEvent.RELEASED, on_logo_released)

basic.show_icon(IconNames.ASLEEP)

def on_forever():
    pass
basic.forever(on_forever)
