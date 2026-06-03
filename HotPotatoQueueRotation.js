//Helps to understand the concept of queue rotation and elimination in a game-like scenario.

function hotPotato(people, passes) {
  const queue = [...people];

  while (queue.length > 1) {
    // pass the potato k times — rotate those people to the back
    for (let i = 0; i < passes; i++) {
      queue.push(queue.shift());
    }

    // person at front is holding it — eliminated
    const eliminated = queue.shift();
    console.log(`Eliminated: ${eliminated}`);
  }

  return queue[0];
}

const people = ['James', 'Sam', 'Susan', 'Sally', 'Kevin'];
console.log('Winner:', hotPotato(people, 3)); 