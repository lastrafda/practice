//@ts-nocheck
const mapLetters = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};
// a hash needs to meet only one criteria to be valid
// - they must convert the same string to the same number every single time it's applied
// if a hash function can return inconsisten results for a given string, it's not valid (don't use random numbers or time)
const basicHashFunction = (str: string) => {
  return str.split("").reduce((acc, curr) => acc * mapLetters[curr], 1);
};

console.log(basicHashFunction("ace"));
console.log(basicHashFunction("cab"));
console.log(basicHashFunction("dab"));
console.log(basicHashFunction("bad"));

// Thesaurus
let thesaurus = {};
thesaurus[basicHashFunction("bad")] = "evil";
console.log({ thesaurus });
thesaurus[basicHashFunction("cab")] = "taxi";
console.log({ thesaurus });
thesaurus[basicHashFunction("ace")] = "star";
console.log({ thesaurus });

console.log(thesaurus[basicHashFunction("ace")]);

// one way to deal with collisions is to store an array
// when there is a collition on the hash, and then search for the key O(N)
// |  |  |  |  |  |
//  5  6  7  8  9

// |  | ["bad", "devil"] ["dab", "pat"] |  |
//  7                  8                 9

// we have to design our hash tables in such a way that it will have few collisions, and therefore, perform lookups in
// O(1) time rather than O(N) time.

/**
 * Making an Efficient Hash Table
 *
 * - How much data we're storing in the hash table
 * - How many cells are available in the hash table
 * - Which hash function we're using
 */
