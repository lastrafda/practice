


const intersection = (arrA: number[], arrB: number[]) => {
    const makeHashMap = (arr: number[]): Record<number, boolean> => arr.reduce((acc: Record<number, boolean>, curr) => {
        acc[curr] = true
        return acc
    }, {})
    const getMatches = (arr: number[], hashMap: Record<number, boolean>) => {
        return arr.reduce((acc: number[], curr) => {
            if (hashMap[curr]) {
                return [...acc, curr]
            }
            return acc
        }, [])
    }
    if (arrA.length > arrB.length) {
        return getMatches(arrB, makeHashMap(arrA))
    }
    return getMatches(arrA, makeHashMap(arrB))
}

const a = [1, 2, 3, 4, 5]
const b = [0, 2, 4, 6, 8]

console.log(intersection(a, b))

export {
    intersection
}

