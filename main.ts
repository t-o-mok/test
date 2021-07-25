function 角度表示 (サーボ: number) {
    if (1 == サーボ) {
        basic.showNumber(角度1)
    } else if (2 == サーボ) {
        basic.showNumber(角度2)
    } else if (3 == サーボ) {
        basic.showNumber(角度3)
    } else if (4 == サーボ) {
        basic.showNumber(角度4)
    } else {
    	
    }
}
function 角度設定 (サーボ: number, 角度: number) {
    if (1 == サーボ) {
        角度1 += 角度
    } else if (2 == サーボ) {
        角度2 += 角度
    } else if (3 == サーボ) {
        角度3 += 角度
    } else if (4 == サーボ) {
        角度4 += 角度
    } else {
    	
    }
}
input.onButtonPressed(Button.A, function () {
    角度設定(サーボ, 増分)
    サーボ出力(サーボ)
    角度表示(サーボ)
})
function サーボ出力 (サーボ: number) {
    if (1 == サーボ) {
        motor.servo(motor.Servos.S1, 角度1)
    } else if (2 == サーボ) {
        motor.servo(motor.Servos.S2, 角度2)
    } else if (3 == サーボ) {
        motor.servo(motor.Servos.S3, 角度3)
    } else if (4 == サーボ) {
        motor.servo(motor.Servos.S4, 角度4)
    } else {
    	
    }
}
input.onButtonPressed(Button.AB, function () {
    if (3 >= サーボ) {
        サーボ += 1
    } else {
        サーボ = 1
    }
    角度表示(サーボ)
})
input.onButtonPressed(Button.B, function () {
    角度設定(サーボ, -1 * 増分)
    サーボ出力(サーボ)
    角度表示(サーボ)
})
let 増分 = 0
let 角度4 = 0
let 角度3 = 0
let 角度2 = 0
let 角度1 = 0
let サーボ = 0
サーボ = 1
角度1 = 90
角度2 = 90
角度3 = 90
角度4 = 90
増分 = 1
角度表示(サーボ)
