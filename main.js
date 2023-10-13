// Amo nisa ang mga cards nga naga appear sa landing page
const data = [
    { title: "What's Up Dock", content: "Fast and eficient cruising.", image: "yacht1.jpeg" },
    { title: "Blue Miracle", content: "Average speed but high passeger capacity.", image: "yacht2.jpeg" },
    { title: "Flying Dutchman", content: "Sleek looking design.", image: "yacht3.jpeg" },
    { title: "Rest A Shore", content: "Latest maritime technology on board", image: "yacht4.jpeg" },
  ];
 // functions that makes the card appear with its content  
  function createCard({ title, content, image }) {
    const card = document.createElement("div");
    card.classList.add("card");
  
    const cardImage = document.createElement("img");
    cardImage.src = image;
  
    const cardTitle = document.createElement("h2");
    cardTitle.textContent = title;
  
    const cardContent = document.createElement("p");
    cardContent.textContent = content;
  // code that integrates them all 
    card.appendChild(cardImage);
    card.appendChild(cardTitle);
    card.appendChild(cardContent);
  
    return card;
  }
  // this function shows the react card
  function renderCards() {
    const root = document.getElementById("root");
  
    data.forEach((item) => {
      const card = createCard(item);
      root.appendChild(card);
    });
  }
  
  renderCards();
 // code that makes all the homepage images clickable 
  const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menu.classList.toggle("open");
});
