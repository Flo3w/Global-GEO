import { eventClickFetch } from "../event/click.js";
import { urlBase } from "../request/api.js";
import { formatBtnContent } from "./formatBtn.js";
import { createNodeElement, viewLocTable, rowTable } from "./nodeElements.js";

export const displayLocAndButtons = (data) => {
  const spanCountries = document.querySelector(".spanCountries");
  const btnNContainer = document.createElement("div");
  spanCountries.innerHTML = "";
  btnNContainer.innerHTML = "";

  const locTable = createNodeElement(viewLocTable);

  data.data.forEach((dt) => {
    // spanCountries.innerHTML += dt.name + "<br>";
    let locTableRow = createNodeElement(rowTable);
    locTableRow.firstChild.innerHTML = dt.name;
    locTable.appendChild(locTableRow);
  });
  spanCountries.appendChild(locTable);

  data.links.forEach((links) => {
    btnNContainer.setAttribute("class", "btnNContainer");
    const btnNext = document.createElement("div");
    btnNext.setAttribute("class", "btnN");
    btnNext.setAttribute("id", "btn" + links["rel"]);
    btnNext.setAttribute("href", links["href"]);
    btnNext.innerHTML = formatBtnContent(links["rel"]);
    spanCountries.appendChild(btnNContainer);
    btnNContainer.appendChild(btnNext);

    eventClickFetch(
      btnNext,
      urlBase + btnNext.getAttribute("href"),
      displayLocAndButtons
    );
  });
};
