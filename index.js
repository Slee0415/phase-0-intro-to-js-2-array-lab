// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
}

module.exports = {
  destructivelyAppendCat
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  
  module.exports = {
    destructivelyPrependCat
  }
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  
  module.exports = {
    destructivelyRemoveLastCat
  }
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  
  module.exports = {
    destructivelyRemoveFirstCat
  }
  function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
  }
  
  module.exports = {
    appendCat
  }
  function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats;
  }
  
  module.exports = {
    prependCat
  }
  function removeLastCat() {
    const newCats = cats.slice(0, -1);
    return newCats;
  }
  
  module.exports = {
    removeLastCat
  }
  function removeFirstCat() {
    const newCats = cats.slice(1);
    return newCats;
  }
  
  module.exports = {
    removeFirstCat
  };