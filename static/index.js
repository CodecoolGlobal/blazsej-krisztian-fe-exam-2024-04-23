import data from "./data.js";

const root = document.querySelector("#root");

function main() {
  const section = document.createElement("section");
  section.className = "intro";

  const h1 = document.createElement("h1");
  h1.className = "intro__header";

  section.append(h1);
  root.append(section);

  const sectionTwo = document.createElement("section");
  sectionTwo.className = "container";

const dataObj = Object.values(data);

  for (const info of dataObj) {
    const card = document.createElement("div");
    card.className = "card";

    const cardHeader = document.createElement("div");
    cardHeader.className = "card__header";

    const cardBody = document.createElement("div");
    cardBody.className = "card__body";

    const cardBodyImage = document.createElement("div");
    cardBodyImage.className = "card__body__image";

    const img = document.createElement("img");
    img.src = info.image;
    img.alt = info.title;

    const cardBodyText = document.createElement("div");
    cardBodyText.className = "card__body__text";
    cardBodyText.innerText = info.text;

    card.append(cardHeader, cardBody);
    cardBody.append(cardBodyImage, cardBodyText);
    cardBodyImage.append(img);
    sectionTwo.append(card);
  }
  root.append(sectionTwo);
  console.log(data);
}

main();
