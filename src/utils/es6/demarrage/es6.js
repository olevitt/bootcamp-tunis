export const keepPositive = array =>
    array.map(a => Number(a)).filter(a => a > 0)

export const average = array =>
    array.map(a => Number(a))
        .reduce((acc, value) => acc + value, 0) / array.length