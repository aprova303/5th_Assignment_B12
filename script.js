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
    let countOfCoins = coins.innerText;
    if (countOfCoins < 20) {
      alert("Insufficient coins to make a call");
      return;
    }
    countOfCoins -= 20;
    coins.innerText = countOfCoins;
    //  let m= call.parentNode.parentNode;
    // const card = call.closest("card-items"); // Change '.card' to your card's class name
    // let service = card.querySelector(".service-name").innerText;
    // let number = card.querySelector(".service-num").innerText;
    let service = document.getElementsByClassName("service-name").innerText;
    let number = document.getElementsByClassName("service-num").innerText;
    console.log(service, number);
    const cardContainer = document.getElementById("card-container");
    const newCard = document.createElement("div");
    newCard.innerHTML = `
           <div class="flex flex-row justify-between items-center rounded-md bg-[#fafafa] p-4 m-3">
              <div>
                 <h1 class="font-bold">${service}</h1>
             <h2 class="text-[#5c5c5c]">${number}</h2>
              </div>
              <h2 class="font-semibold">11:36:58 AM</h2 >
           </div>

`;
    console.log(newCard);
    cardContainer.append(newCard);
  });
}

// clear button
document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("card-container").innerText = " ";
});

// copy button features
// document.querySelectorAll("copy-btn").forEach((button))
// document.getElementsByClassName("copy-btn").addEventListener("click", function () {
//   alert("Copied!");
//   console.log("copied")
// });



