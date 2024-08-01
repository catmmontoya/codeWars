// Oh no! I've lost my glasses, but paradoxically, I need glasses to find my glasses!

// Please help me out by showing me the index in the list which contains my glasses. They look like two capital Os, with at least one dash in between!

// This means that both O--O and O------------O are valid glasses, but not O----#--O for example!
// Search thoroughly, you might find my glasses in places such as 'dustO-Odust'

// Notes: All lists will include one valid pair of glasses because I swear I dropped them around here somewhere ...
// All elements in the list are strings.

function findGlasses(arr) {
  //look for the index where the first zero has a dash on the right and second has dash on the left.
  for (let i = 0; i < arr.length; i++) {
    // if index is 0 loop through until you hit another 0.
    if (arr[i] === "0") {
      let j = i + 1;
      while (j < arr.length && arr[j] === "-") {
        j++; // it is now incrementing through the new inner loop
      }
      if (j < arr.length && arr[j] === "0") {
        return i;
      }
    }
  }
}
//return the index
