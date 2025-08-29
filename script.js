let call_list = [];
// heart icon features
let hearts = document.getElementsByClassName("heart");
for (const heart of hearts) {
  heart.addEventListener("click", function (e) {
    e.preventDefault();
    let heartCount = parseInt(document.getElementById("heart-count").innerText);
    heartCount++;
    document.getElementById("heart-count").innerText = heartCount;
  });
}

// call button features
let calls = document.getElementsByClassName("call-btns");
for (const call of calls) {
  call.addEventListener("click", function () {
    let coins = document.getElementById("coin-count");
    let countOfCoins = parseInt(coins.innerText);


    const card = call.closest('.card');
   
    let service = card.querySelector(".service-name") 
      ? card.querySelector(".service-name").innerText 
      : card.querySelector("h2.font-bold").innerText;
    let number = card.querySelector(".service-num") 
      ? card.querySelector(".service-num").innerText 
      : card.querySelector("h1.font-bold").innerText;

    // Check coins
    if (countOfCoins < 20) {
      alert("Insufficient coins to make a call");
      return;
    }

    // Show alert with service name and number
    alert(`Calling ${service} at ${number}`);

    // Reduce coins
    countOfCoins -= 20;
    coins.innerText = countOfCoins;

    // Add to call history
    const cardContainer = document.getElementById("card-container");
    const newCard = document.createElement("div");
    newCard.innerHTML = `
      <div class="flex flex-row justify-between items-center rounded-md bg-[#fafafa] p-4 m-3">
        <div>
          <h1 class="font-bold">${service}</h1>
          <h2 class="text-[#5c5c5c]">${number}</h2>
        </div>
        <h2 class="font-semibold">${new Date().toLocaleTimeString()}</h2>
      </div>
    `;
    cardContainer.append(newCard);
  });
}

// clear button
document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("card-container").innerText = " ";
});


let copyBtns = document.getElementsByClassName("copy-btn");
for (const copyBtn of copyBtns) {
  copyBtn.addEventListener("click", function () {
    // Find the parent card
    const card = copyBtn.closest('.card');
    // Get the hotline number
    let number = card.querySelector(".service-num")
      ? card.querySelector(".service-num").innerText
      : card.querySelector("h1.font-bold").innerText;

    // Copy to clipboard
    navigator.clipboard.writeText(number);

    // Increase copy count
    let copyCountElem = document.getElementById("copy-count");
    let copyCount = parseInt(copyCountElem.innerText);
    copyCount++;
    copyCountElem.innerText = copyCount;

    // Get current local time
    let currentTime = new Date().toLocaleTimeString();

    // Show alert
    alert(`Hotline number ${number} copied`);
  });
}