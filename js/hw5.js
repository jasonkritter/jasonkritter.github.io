const url = "https://jasonkritter.github.io/degrees.json";
const degreeCards = document.getElementById("degree-cards");
const getDegreesButton = document.getElementById("get-degrees");

getDegreesButton.onclick = function () {
  fetchDegreesJson();
};

function fetchDegreesJson() {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then((degrees) => {
      let degreeCardsHtml = generateHtml(degrees);
      degreeCards.innerHTML = degreeCardsHtml;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function generateHtml(degrees) {
  const degreesHtml = degrees.map(
    (degree) =>
      `<a class="card" 
          href="${degree.programUrl}"
          target="_blank">
        <div class="card-image">
          <img src="${degree.logoUrl}" alt="${degree.collegeName} logo" />
        </div>
        <div class="card-text">
          <h3>${degree.type} in ${degree.major}</h3>
          <ul>
            <li><strong>College:</strong>  ${degree.collegeName}</li>
            <li><strong>Concentration:</strong> ${degree.concentration}</li>
            <li><strong>Year Conferred:</strong> ${degree.yearConferred}</li>
          </ul>
        </div>
      </a>`
  );
  return degreesHtml.join("");
}
