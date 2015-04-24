var express = require('express');
var app = express();

app.get('/animals', function(req, res){
  res.json(animals);
})

app.listen(3000)


var animals = {
  elephant: {
    name: 'Dumbo',
    type: 'Mammal',
    genus: 'Elepha',
    legs: 4
  },
  alligator: {
    name: 'Freddy',
    type: 'Reptile',
    genus: 'Alligator',
    legs: 4
  },
  panda: {
    name: 'Benji',
    type: 'Mammal',
    genus: 'Ailuropoda',
    legs: 4
  },
  lion: {
    name: 'Maxim',
    type: 'Mammal',
    genus: 'Panthera',
    legs: 4
  },
  monkey: {
    name: 'Marco',
    type: 'Mammal',
    genus: 'Homo',
    legs: 2
  },
  koala: {
    name: 'Kai',
    type: 'Mammal',
    genus: 'Phascolarctos',
    legs: 4
  },
  tiger: {
    name: 'George',
    type: 'Mammal',
    genus: 'Panthera',
    legs: 4
  },
  t_rex: {
    name: 'Milton',
    type: 'Dinosaur',
    genus: 'Tyrannosaurus',
    legs: 4
  },
  brown_bear: {
    name: 'Ted',
    type: 'Mammal',
    genus: 'Ursidae',
    legs: 4
  },
  dodo: {
    name: 'Gertrude',
    type: 'Bird',
    genus: 'Raphus',
    legs: 2
  },
  penguin: {
    name: 'Frankie',
    type: 'Bird',
    genus: 'Spheniscidae',
    legs: 2
  }
}