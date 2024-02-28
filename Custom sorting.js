function ascendingSort(numbers) {
    const n = numbers.length;

    // Outer loop - iterates through each element in the array
    for (let i = 0; i < n - 1; i++) {
   // Inner loop - iterates through the unsorted portion of the array
        for (let j = 0; j < n - i - 1; j++) {
   // Compare adjacent elements and swap if they are in the wrong order
            if (numbers[j] > numbers[j + 1]) {
                const temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }

    return numbers;
}
const myNumbers = [1,3,6,4];
const sortedNumbers = ascendingSort(myNumbers); 
console.log("Original Numbers:", myNumbers);
console.log("Sorted Numbers (Ascending):", sortedNumbers);

