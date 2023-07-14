/* Optimize your code 

Open DevTools for developers in your browser to see the console and possible errors at real time


1 - First of all...

To protect the code by third parties, changes, avoid errors or manipulations on console of our code, we need to use the MODULE PATTERN below and include all the code inside de arrow function self summoned with 'use strict' inside

(() => {
  'use strict'

  // Paste your code here! <----------
  
})();


2 - Second...

If we have more than one (let, const, var) all together, we can simplify deleting and leaving just the first and put ',' instead ';' at the end

Example:

const common = ["A", "B", "C", "D"];
const uncommon = ["E", "F", "G", "H"];
const rare = ["I", "J", "K", "L"];
const mythic = ["M", "N", "O", "P"];
const legendary = ["Q", "R", "S", "T"];

BETTER DO <------

const common = ["A", "B", "C", "D"],
      uncommon = ["E", "F", "G", "H"],
      rare = ["I", "J", "K", "L"],
      mythic = ["M", "N", "O", "P"],
      legendary = ["Q", "R", "S", "T"];


3 - You can try to optimize the code more if you want...


  */
