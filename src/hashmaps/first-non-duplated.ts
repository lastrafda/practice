const makeHashMap = (arr: string[]): Record<string, boolean> => arr.reduce((acc: Record<string, boolean>, curr) => {
    acc[curr] = false
    return acc
}, {})

const getFirstNonDuplicated = (str: string) => {
    const isDuplicatedHashMap: Record<string, boolean> = {}
    for (const char of str) {
        if (isDuplicatedHashMap[char] === undefined) {
            isDuplicatedHashMap[char] = false
        } else {
            isDuplicatedHashMap[char] = true
        }
    }
    for (const char of str) {
        if (!isDuplicatedHashMap[char]) {
            return char
        }
    }
    return ""
}
console.log(getFirstNonDuplicated("minimum"))
export { }
