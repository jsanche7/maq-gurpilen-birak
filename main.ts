let Birak = 0
DFRobotMaqueenPlus.I2CInit()
DFRobotMaqueenPlus.clearDistance(Motors.M1)
basic.forever(function () {
    basic.showNumber(parseFloat(DFRobotMaqueenPlus.readeDistance(Motors1.M1)))
})
basic.forever(function () {
    Birak = parseFloat(DFRobotMaqueenPlus.readeDistance(Motors1.M1))
    if (Birak < 6) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 50)
    } else {
        DFRobotMaqueenPlus.mototStop(Motors.M1)
    }
})
