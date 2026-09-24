let Throttle = 0
input.onButtonPressed(Button.A, function () {
    Throttle += -5
})
input.onButtonPressed(Button.AB, function () {
    if (true) {
    	
    }
    if (true) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    Throttle += 5
})
basic.forever(function () {
    basic.showNumber(Throttle)
})
