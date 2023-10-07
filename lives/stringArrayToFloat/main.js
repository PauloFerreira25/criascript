 const arrayString = ["1000", "1.000", "1,000", "1000,0", "1.000,0", "1.234.567,89", "1,234,567.89", "1.000.000.000"]
// const arrayString = ["1.234.567,89", "1,234,567.89"]
const resultEnd = [1000.0, 1000.0, 1000.0, 1000.0, 1000.0, 1234567.89, 1234567.89, 1000000000.0]


function reverse1(str) {
    if (!str || str.length < 2 || typeof str !== "string") {
        return new Error("Not a valid input");
    }
    const backwards = [];
    for (let i = str.length; i > -1; i--) {
        backwards.push(str[i]);
    }
    return backwards.join('');
}

const temPonto = (str) => {
    let result = 0
    for (let i = 0; i <= str.length; i++) {
        if (str[i] == '.')
            return i
    }
    return result
}
const temComma = (str) => {
    let result = 0
    for (let i = 0; i <= str.length; i++) {
        if (str[i] == ',')
            return i
    }
    return result
}
// const tryBR  = (data) => {}
const magicFunc = (data) => {
    const reverse = reverse1(data)
    const hasDot = temPonto(reverse)
    const hasVirgula = temComma(reverse)
    console.log(hasDot)
    console.log(hasVirgula)
    if (hasVirgula == 2) {
        return parseFloat(data.replaceAll('.', '').replace(',', '.'))
    }
    if (hasDot == 2) {
        return parseFloat(data.replaceAll(',', ''))
    }
    if (hasDot > 2) {
        return parseFloat(data.replaceAll('.', ''))
    }
    if (hasVirgula > 2) {
        return parseFloat(data.replaceAll(',', ''))
    }
    return parseFloat(data)
}

const arrayCast = arrayString.map(magicFunc)
console.log({ arrayCast })

