input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Angry)
    music.play(music.stringPlayable("G A C5 C5 C5 A G F ", 120), music.PlaybackMode.UntilDone)
})
