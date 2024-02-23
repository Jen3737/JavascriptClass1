// Write your code here

class Book {
  constructor(title, author, ISBN, numCopies)
  {
    this.title = title,
    this.author = author,
    this.ISBN = ISBN,
    this.numCopies = numCopies
  }

  get availability() {
    return this.getAvailability();
  }
  getAvailability() {
    let num = this.numCopies
    let status;
    
    switch (true) {
      case num == 0:
        status = "Availability: Out of stock"
        break;
      case num < 10:
        status = "Availability: Stock is low"
        break;
      default:
        status = "Availability: In stock"
    }
    return status;
  }
  sell(sellResult, numSold = 1) {
    let num = this.numCopies;
    
    if (num >= numSold) { 
      sellResult.newNum = (num - numSold)
      sellResult.message = "Sold!  There are " + sellResult.newNum + " copies left."
    } else {
      sellResult.newNum = num
      sellResult.message = "Not enough books in stock!  There are only " + sellResult.newNum + " copies left."
    }
    console.log(sellResult.message)
    this.numCopies = sellResult.newNum;
    return sellResult
  }

 restock(numCopiesStocked = 5) {
    this.numCopies += numCopiesStocked;
    console.log("Restocked!  There are now " + this.numCopies + " copies in stock.")
  }
}

  class sellResult  {
    constructor (newNum, sellMsg)
    {
      this.newNum = newNum
      this.sellMsg = sellMsg
    }
  }
const HungerGames = new Book("Hunger Games", "Suzanne Collins", 123919, 5);
console.log(HungerGames.availability);

HungerGames.sell(sellResult, 2);
console.log(HungerGames.availability);
HungerGames.restock(4);
console.log(HungerGames.availability);
HungerGames.sell(sellResult, 7);
console.log(HungerGames.availability);
HungerGames.restock(15);
console.log(HungerGames.availability);