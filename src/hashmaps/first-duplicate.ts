const firstDuplicate = (arr: string[]) => {
    let hashMap: Record<string, boolean> = {}
    for (const str of arr) {
        if (hashMap[str]) {
            return str
        } else {
            hashMap[str] = true
        }
    }
    return ""
}

const arr = ["a", "b", "c", "d", "c", "e", "f"]


console.log(firstDuplicate(arr))

export { firstDuplicate }
