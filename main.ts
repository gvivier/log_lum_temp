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
        "Lum",
        "Temp"
        )
    }
})
let T = 0
let L = 0
let logging = false
serial.setBaudRate(BaudRate.BaudRate115200)
logging = false
datalogger.includeTimestamp(FlashLogTimeStampFormat.Days)
datalogger.setColumnTitles(
"Lum",
"Temp"
)
loops.everyInterval(60000, function () {
    if (logging) {
        L = input.lightLevel()
        T = input.temperature()
        serial.writeValue("L", L)
        serial.writeValue("T", T)
        datalogger.log(
        datalogger.createCV("Lum", input.lightLevel()),
        datalogger.createCV("Temp", input.temperature())
        )
    }
})
