function 角度設定 (サーボ: number, 角度: number) {
    if (1 == サーボ) {
        motor.servo(motor.Servos.S1, 角度)
    } else if (2 == サーボ) {
        motor.servo(motor.Servos.S2, 角度)
    } else if (3 == サーボ) {
        motor.servo(motor.Servos.S3, 角度)
    } else if (4 == サーボ) {
        motor.servo(motor.Servos.S4, 角度)
    } else {
    	
    }
}
let サーボ = 1
let 角度 = 90
let 増分 = 1
basic.forever(function () {
    basic.pause(1000)
    basic.pause(1000)
    basic.pause(1000)
})
