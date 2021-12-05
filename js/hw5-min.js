const url="https://jasonkritter.github.io/degrees.json",degreeCards=document.getElementById("degree-cards"),getDegreesButton=document.getElementById("get-degrees");function fetchDegreesJson(){fetch(url).then((e=>{if(!e.ok)throw new Error("Network response was not OK");return e.json()})).then((e=>{let n=generateHtml(e);degreeCards.innerHTML=n})).catch((e=>{console.error("Error:",e)}))}function generateHtml(e){return e.map((e=>`<a class="card" \n          href="${e.programUrl}"\n          target="_blank">\n        <div class="card-image">\n          <img src="${e.logoUrl}" alt="${e.collegeName} logo" />\n        </div>\n        <div class="card-text">\n          <h3>${e.type} in ${e.major}</h3>\n          <ul>\n            <li><strong>College:</strong>  ${e.collegeName}</li>\n            <li><strong>Concentration:</strong> ${e.concentration}</li>\n            <li><strong>Year Conferred:</strong> ${e.yearConferred}</li>\n          </ul>\n        </div>\n      </a>`)).join("")}getDegreesButton.onclick=function(){fetchDegreesJson()};