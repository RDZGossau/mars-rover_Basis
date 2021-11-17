input.onSound(DetectedSound.Loud, function () {
    Rover.stop(eStopMode.Coast)
    Rover.zeroServos(eServoGroup.All)
})
input.onButtonPressed(Button.A, function () {
    Rover.move_milli(eVector.Forward, 70, 1000)
})
input.onButtonPressed(Button.B, function () {
    Rover.move_milli(eVector.Reverse, 70, 1000)
})
Rover.setLedColor(Rover.convertRGB(0, 1, 2))
Rover.zeroServos(eServoGroup.All)
basic.forever(function () {
    if (Rover.eWaitKey() == Rover.eKeyValue(eKeys.kReverse)) {
        Rover.move_milli(eVector.Reverse, 70, 2000)
    }
    if (Rover.eWaitKey() == Rover.eKeyValue(eKeys.kForward)) {
        Rover.move_milli(eVector.Forward, 70, 2000)
    }
    if (Rover.eWaitKey() == Rover.eKeyValue(eKeys.kStop)) {
        Rover.stop(eStopMode.Brake)
    }
    if (Rover.eWaitKey() == Rover.eKeyValue(eKeys.kMastLeft)) {
        Rover.setServo(Rover.getServoNumber(eServos.Mast), 90)
    } else {
        Rover.zeroServos(eServoGroup.Mast)
    }
    if (Rover.eWaitKey() == Rover.eKeyValue(eKeys.kMastRight)) {
        Rover.setServo(Rover.getServoNumber(eServos.Mast), 180)
    } else {
        Rover.zeroServos(eServoGroup.Mast)
    }
    if (Rover.eWaitKey() == Rover.eKeyValue(eKeys.kStop) || Rover.readSonar(ePingUnit.Centimeters) <= 5) {
        Rover.stop(eStopMode.Coast)
        Rover.zeroServos(eServoGroup.All)
    }
    if (Rover.eWaitKey() == Rover.eKeyValue(eKeys.kSpinRight)) {
        Rover.spin(eDirection.Right, 60)
    }
})
