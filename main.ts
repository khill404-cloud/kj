input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C5 A B C5 G - A B ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    music.stopAllSounds()
})
music.setVolume(245)
basic.showIcon(IconNames.House)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ringtone), music.PlaybackMode.InBackground)
