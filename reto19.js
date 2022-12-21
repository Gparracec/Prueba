function howManyReindeers(reindeerTypes, gifts) {
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

  console.log ( 
     JSON.stringify(
        howManyReindeers( 
        [
        { type: 'Nuclear', weightCapacity: 50 },
        { type: 'Electric', weightCapacity: 10 },
        { type: 'Gasoline', weightCapacity: 5 },
        { type: 'Diesel', weightCapacity: 1 },
        ],
        [{ country: 'Spain', weight: 30 }]
        ),
    null,
    2
    )
  );

/*
  console.log (const gifts = [
    { country: 'Spain', weight: 30 },
    { country: 'Spain', weight: 7 },
    { country: 'France', weight: 17 }
  ]);
  */