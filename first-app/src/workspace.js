// 分割代入(Destructing assignment)

// ①配列の場合

const users = [
    'ベップ',
    'イシカワ',
    'サワキ'
]

const [a, b, c] = users

// console.log(a);
// console.log(b);
// console.log(c);

// ②オブジェクトの場合
const obj = {
    name: 'Beppu',
    from: 'Japan'
}

const { name, from } = obj

console.log(name);
