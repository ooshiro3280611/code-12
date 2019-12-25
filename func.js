// 関数宣言分
function sum(a, b) {
    return a + b
}

//  関数式
const sum = function (a, b) {
    return a + b
}
// 関数式(アロー関数)
const sum = (a, b) => {
    return a + b
}

const sum = (a, b) => (
    a + b
)
// ↑return省略

const sum = (a, b) => a + b
// ↑一行省略

const sample = c => c * 100
// ↑引数一つならカッコを省略