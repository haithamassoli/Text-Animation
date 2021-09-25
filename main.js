let logo = document.querySelectorAll("#logo path");

for (let i = 7; i < logo.length; i++) {
  console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
}
