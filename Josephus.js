function josephus(n, k) {
    let people = Array.from({ length: n }, (_, i) => i + 1);
    let index = 0;

    while (people.length > 1) {
        index = (index + k - 1) % people.length;
        people.splice(index, 1);
    }

    return people[0];
}

const n = 7; // Number of people
const k = 3; // Step count
const survivor = josephus(n, k);
console.log(`The survivor is: ${survivor}`);