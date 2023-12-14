function firstWord(s) {
  // your code here
if (s === '') {
    return '';
  }

  const spaceIndex = s.indexOf(' ');

  if (spaceIndex === -1) {
    return s; // Return the entire string if there is no space.
  }

  return s.substring(0, spaceIndex);	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
