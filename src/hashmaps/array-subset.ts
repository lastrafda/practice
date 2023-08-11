const subsetA = ["a", "b", "c", "d", "e", "f"]
const subsetB = ["b", "d", "f"]

const subsetC = ["a", "b", "c", "d", "e", "f"]
const subsetD = ["b", "d", "f", "h"]


const makeHashMap = (arr: string[]): Record<string, boolean> => arr.reduce((acc: Record<string, boolean>, curr) => {
    acc[curr] = true
    return acc
}, {})

const isSubSet = (arrA: string[], arrB: string[]) => {
    const hashA = makeHashMap(arrA)
    return arrB.every(k => hashA[k])
}

const hasSubSet = (arrA: string[], arrB: string[]) => {
    if (arrA.length > arrB.length) {
        return isSubSet(arrA, arrB)
    }
    return isSubSet(arrB, arrA)
}



console.log("is B a subset of A")
console.log(isSubSet(subsetA, subsetB))

console.log("checks if the smaller array is a subset of the bigger one")
console.log(hasSubSet(subsetD, subsetC))
console.log(hasSubSet(subsetB, subsetA))

export { hasSubSet }
