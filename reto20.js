function printTable(gifts) {
    return gifts.map((gift) => {
        let currentMax = gift.weight;
        let weights = Object.values(reindeerTypes)
          .map((x) => [x.type, x.weightCapacity])
          .filter((x) => x[1] < currentMax)
          .sort((x, y) => y[1] - x[1]);
        let currentCapacity = weights.reduce((acc, curr) => (acc += curr[1]), 0);
    
        let reindeerQuantity = weights.map(([type, weight]) => {
          let quantity = (currentMax / currentCapacity) >> 0;
          currentCapacity -= weight;
          currentMax -= quantity * weight;
          return { type, num: quantity };
        });
    
        return { country: gift.country, reindeers: reindeerQuantity };
      });
  }


  console.log(
	printTable([
		{ name: 'Game', quantity: 2 },
		{ name: 'Bike', quantity: 1 },
		{ name: 'Book', quantity: 3 },
	])
);

console.log(
	printTable([
		{ name: 'PlayStation 5', quantity: 9234782374892 },
		{ name: 'Book Learn Web Dev', quantity: 23531 },
	])
);