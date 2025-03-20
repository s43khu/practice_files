
//==================================== GET THE UNIQUe COMBINATIONS FROM THE WORLIST =====================================//

// There are two methods for getting unique cobination we can use nPr and nCr for now we are using nPr as the outcomes not to be unique by words but by the arrangement they can be different
// In nCr method outcomes will be unqiue even with the combinations
// Permutations method

function generateUniqueCombinations(wordList, wordsPerCombination, outcomesNeeded) {
    const generatedTexts = new Set();

    function getRandomWords(arr, num) {
        const shuffled = arr.slice().sort(() => 0.5 - Math.random());
        return shuffled.slice(0, num).join(" ");
    }

    function combinationsLimit() {
        const n = wordList.length;
        const r = wordsPerCombination;
        return factorial(n) / factorial(n - r);
    }

    function factorial(num) {
        return num <= 1 ? 1 : num * factorial(num - 1);
    }

    if (outcomesNeeded > combinationsLimit()) {
        console.log(`Warning: Requested outcomes exceed possible unique combinations (${combinationsLimit()}).`);
    }

    while (generatedTexts.size < outcomesNeeded && generatedTexts.size < combinationsLimit()) {
        let newText;
        do {
            newText = getRandomWords(wordList, wordsPerCombination);
        } while (generatedTexts.has(newText));

        generatedTexts.add(newText);
    }

    return Array.from(generatedTexts);
}

const wordList = [
    "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew",
    "kiwi", "lemon", "mango", "nectarine", "orange", "papaya", "quince", "raspberry",
    "strawberry", "tangerine", "ugli", "vanilla", "watermelon", "xigua", "yellowfruit", "zucchini"
];

const results = generateUniqueCombinations(wordList, 4, 1000);
console.log(results);

//=================================================================================================================//
