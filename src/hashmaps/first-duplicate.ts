const firstDuplicate = (arr: string[]) => {
    let hashMap: Record<string, boolean> = {}
    let result
    let i = 0
    while (arr.length > i) {
        if (hashMap[arr[i]]) {
            result = arr[i]
            break;
        }
        hashMap[arr[i]] = true
        i++;
    }
    return result
}

const arr = ["a", "b", "c", "d", "c", "e", "f"]


console.log(firstDuplicate(arr))

export { firstDuplicate }
