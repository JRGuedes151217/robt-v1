Mbit_IR.onPressEvent(RemoteButton.Power, function () {
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.Right, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 50)
})
Mbit_IR.onPressEvent(RemoteButton.Up, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, 55)
})
Mbit_IR.onPressEvent(RemoteButton.Left, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, 50)
})
Mbit_IR.onPressEvent(RemoteButton.Down, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, 50)
})
Mbit_IR.init(Pins.P8)
