datalogger.onLogFull(function () {
    logging = !(logging)
    basic.showIcon(IconNames.Skull)
})
input.onButtonPressed(Button.A, function () {
    logging = !(logging)
    if (logging) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.AB, function () {
    if (input.logoIsPressed()) {
        basic.showIcon(IconNames.No)
        datalogger.deleteLog()
        logging = false
        datalogger.setColumnTitles(
        "Lumiere",
        "Température"
        )
    }
})
let logging = false
logging = false
datalogger.setColumnTitles(
"Lumiere",
"Température"
)
loops.everyInterval(60000, function () {
    if (logging) {
        datalogger.log(
        datalogger.createCV("Lumiere", input.lightLevel()),
        datalogger.createCV("Température", input.temperature())
        )
    }
})
basic.forever(function () {
	
})
