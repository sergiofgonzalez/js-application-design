(function() {
  "use strict";

  var button = document.querySelector("button");
  button.addEventListener("click", function() {
    showRequestInProgress();
    var req = new XMLHttpRequest();
    req.open("GET", "http://spark:8080/data.txt", true);
    req.addEventListener("load", function() {
      showResults(req);
    });
    try {
      req.send(null);
    } catch (error) {
      console.log("An error was caught while sending the request:", error);
      return;
    }
  });

  var alertBox = null;
  function showRequestInProgress() {
    alertBox = document.createElement("div");
    alertBox.className = "alert alert-info";
    alertBox.textContent = "HTTP request in progress";
    document.querySelector("#container").appendChild(alertBox);
  }

  function appendTableData(tableRow, text) {
    var tableData = document.createElement("td");
    tableData.textContent = text;
    tableRow.appendChild(tableData);
  }

  function showResults(req) {
    document.querySelector("#container").removeChild(alertBox);
    console.log("responseText(0:80):", req.responseText.slice(0, 80));
    console.log("status:", req.status);
    console.log("statusText:", req.statusText);

    var resultsTable = document.createElement("table");
    resultsTable.class = "table";

    var caption = document.createElement("caption");
    caption.textContent = "Synchronous Request Results";

    resultsTable.appendChild(caption);
    resultsTable.className = "table";

    var tableHead = document.createElement("thead");
    var tableRow = document.createElement("tr");
    appendTableData(tableRow, "Description");
    appendTableData(tableRow, "Value");
    tableHead.appendChild(tableRow);


    var tableBody = document.createElement("tbody");

    tableRow = document.createElement("tr");
    appendTableData(tableRow, "response(0:80)");
    appendTableData(tableRow, req.responseText.slice(0, 80));
    tableBody.appendChild(tableRow);

    tableRow = document.createElement("tr");
    appendTableData(tableRow, "Status");
    appendTableData(tableRow, req.status);
    tableBody.appendChild(tableRow);

    tableRow = document.createElement("tr");
    appendTableData(tableRow, "Status Message");
    appendTableData(tableRow, req.statusText);
    tableBody.appendChild(tableRow);

    resultsTable.appendChild(tableHead);
    resultsTable.appendChild(tableBody);

    var container = document.querySelector("#container");
    container.appendChild(resultsTable);
  }
})();
