const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {

    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('triceratops', 'herbivore', 30);
    dinosaur3 = new Dinosaur('Velociraptor', 'carnivore', 40);

    park = new Park('Jurassic Park', 50, []);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketprice;
    assert.strictEqual(actual, 50);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDino(dinosaur1);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.removeDino();
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    const actual = park.mostPopular();
    assert.strictEqual(actual, dinosaur1)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur1);
    const actual = park.findBySpecies(dinosaur1.species);
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur1]);
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    const actual = park.removeBySpecies(dinosaur1.species);
    assert.deepStrictEqual(actual, [dinosaur2, dinosaur3]);
  });

  it('should be able to calculate daily visitors', function(){
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    const actual = park.dailyVisitorCount();
    assert.strictEqual(actual, 120);
  })

  it('should be able to calculate yearly visitors', function(){
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    const actual = park.yearlyVisitorCount();
    assert.strictEqual(actual, 43800);
  })

  it('should be able to calculate yearly revenue', function(){
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.addDino(dinosaur3);
    const actual = park.yearlyRevenueCount();
    assert.strictEqual(actual, 2190000);
  })
});
