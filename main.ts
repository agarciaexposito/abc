input.onButtonPressed(Button.A, function () {
    indice += -1
})
input.onButtonPressed(Button.B, function () {
    indice += 1
})
let indice = 0
let abc = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z"
]
basic.forever(function () {
    basic.showString("" + (abc[indice]))
})
