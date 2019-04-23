 const Park = function (name, ticketprice, dinosaurs) {
   this.name = name;
   this.ticketprice = ticketprice;
   this.dinosaurs = [];
 }

Park.prototype.addDino = function(dinosaur){
  this.dinosaurs.push(dinosaur);
};


Park.prototype.removeDino = function(){
  this.dinosaurs.pop();
};

Park.prototype.mostPopular = function(){
 let dino_array = this.dinosaurs.slice()
 dino_array.sort(function (a, b){
   return b.guestsAttractedPerDay - a.guestsAttractedPerDay;
 });
 return dino_array[0];
};


Park.prototype.findBySpecies = function(species){
  let dino_array = this.dinosaurs.filter(function(dino){
    return dino.species == species;
  });
  return dino_array;
};

Park.prototype.removeBySpecies = function(species){
  let dino_array = this.dinosaurs.filter(function(dino){
    return dino.species !== species;
  });
  return dino_array;
};

Park.prototype.dailyVisitorCount = function(){
  let count = 0
  for (let i = 0; i < this.dinosaurs.length; i++){
    count += this.dinosaurs[i].guestsAttractedPerDay;
  };
  return count
};

Park.prototype.yearlyVisitorCount = function(){
  return this.dailyVisitorCount() * 365;
};

Park.prototype.yearlyRevenueCount = function(){
  return this.yearlyVisitorCount() * this.ticketprice;
};

 module.exports = Park;
