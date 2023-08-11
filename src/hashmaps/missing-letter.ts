const makeHashMap = (arr: string[]): Record<string, boolean> => arr.reduce((acc: Record<string, boolean>, curr) => {
    acc[curr] = true
    return acc
}, {})
const alphabetArray: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const getMissingLetter = (str: string) => {
    let missingLetter = ""
    const strMap = makeHashMap(str.split(''))
    for (const letter of alphabetArray) {
        if (!strMap[letter]) {
            missingLetter = letter
            break
        }
    }
    return missingLetter
}

console.log("the quick brown box jumps over a lazy dog")
console.log(getMissingLetter("the quick brown box jumps over a lazy dog"))
