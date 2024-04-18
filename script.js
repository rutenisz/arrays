// who's buying lunch code

function whoBuysLunch(names) {
  const numberOfNames = names.length;

  const randomIndex = Math.floor(Math.random() * numberOfNames);

  const selectedName = names[randomIndex];

  return selectedName + " is going to buy lunch for everyone today.";
}

console.log(whoBuysLunch(["Ben", "Jenny", "Tom", "Charlotte", "Carrie"]));
