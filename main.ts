input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    led.unplot(Padeln, 4)
    Padeln += -1
    led.plot(Padeln, 4)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    led.unplot(Padeln, 4)
    Padeln += 1
    led.plot(Padeln, 4)
})
let Padeln = 0
Padeln = 0
basic.forever(function () {
	
})
