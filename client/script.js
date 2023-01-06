import bot from "./assets/bot.svg";
import user from "./assets/user.svg";

const form = document.querySelector("form");
const chatContainer = document.querySelector("#chat_container");

// Loading functionality
let loadInterval;

const loader = (element) => {
  element.textContent = "";

  loadInterval = setInterval(() => {
    element.textContent += ".";
    if (element.textContent === "....") {
      element.textContent = "";
    }
  }, 300);
};

// Typing fuctionality

const typeText = (element, text) => {
  let index = 0;
  let interval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.chartAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20);
};

// Generating unique id
const generateUniqueId = () => {
  const timeStamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timeStamp}-${hexadecimalString}`;
};

// ChatStripe between user and robot
const chatStripe = (isAi, value, uniqueId) => {
  return `
     <div class="wrapper ${isAi && "ai"}">
       <div class="chat">
          <div class="profile">
              <img src="assets/send.svg">
          </div>
       </div>
     </div>
  `;
};
