type ObjectKey = string | number | symbol
const hashMapFrom = <A>(defaultValue: A) => <B extends ObjectKey>(a: B[]) => {
    let hashmap: Record<B, A> = {} as Record<B, A>
    for (const iterator of a) {
        hashmap[iterator] = defaultValue
    }
    return hashmap
}



const uniqueValues = <A extends ObjectKey>(arr: A[][]) => {
    const flattenedArr = arr.flat()
    const hashMap = hashMapFrom(0)(flattenedArr)
    let result = []
    for (const subArray of arr) {
        for (const element of subArray) {
            console.log(element)
            hashMap[element] = ++hashMap[element]
        }
    }
    for (const [key, value] of Object.entries(hashMap)) {
        if (value === 1) {
            result.push(key)
        }
    }
    return result
}

console.log(
    uniqueValues([
        ["AWS", "GCP", "AZURE", "DIGITAL_OCEAN", "ALIBABA_CLOUD"],
        ["AWS", "AZURE"],
        ["GCP"]
    ])
)
export { }
