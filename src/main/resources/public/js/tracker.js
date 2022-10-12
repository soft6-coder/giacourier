let shipmentId = new URLSearchParams(window.location.search).get(
  "shipmentid"
);
let orderStages = document.querySelectorAll(".order-stage");

getShipment(shipmentId);



function getShipment(shipmentId) {
  let shipmentXhr = new XMLHttpRequest();
  shipmentXhr.open("GET", `/shipment/${shipmentId}`, true);
  shipmentXhr.send();

  shipmentXhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.response);

      document.getElementById("tracking-no").textContent = response.shipmentId;
      document.getElementById("status").textContent =
        response.shipmentStatus.shipmentStatus;
      document.getElementById("depature").textContent =
        response.senderAddress.countryName;
      document.getElementById("shipment-date").textContent =
        response.shipmentDate;
      document.getElementById("arrival-date").textContent =
        response.deliveryDate;
      document.getElementById("sender-name").textContent = response.senderName;
      document.getElementById("sender-address").textContent =
        response.senderAddress.countryName;
      document.getElementById("shipment-destination").textContent =
        response.shipmentDestination.countryName;
      document.getElementById("receiver-name").textContent =
        response.receiverName;
      document.getElementById("receiver-address").textContent =
        response.receiverAddress.countryName;
      document.getElementById("receiver-phone-number").textContent =
        response.receiverPhone;
      document.getElementById("receiver-email").textContent =
        response.receiverEmail;
      document.getElementById("mode").textContent = response.shipmentMode;
      document.getElementById("package").textContent = response.shipmentPackage;
      // document.getElementById("reference-code").textContent = response.senderName;
      document.getElementById("weight").textContent = response.weight;
      document.getElementById("service-type").textContent =
        response.serviceType;
      // console.log(response)

      let shipmentStage;
      if (response.shipmentStage.shipmentStageId == 1) {
        shipmentStage = "received";
      } else if (response.shipmentStage.shipmentStageId == 2) {
        shipmentStage = "dispatched";
      } else if (response.shipmentStage.shipmentStageId == 3) {
        shipmentStage = "middle";
      } else if (response.shipmentStage.shipmentStageId == 4) {
        shipmentStage = "delivered";
      }

      changeStage(document.getElementById(shipmentStage));

      getShipmentHistory(shipmentId);
      setTimeout(function () {
        stopSpinner();
      }, 1000);
    }
  };
}

function getShipmentHistory(shipmentId) {
  let shipmentHistoryXhr = new XMLHttpRequest();
  shipmentHistoryXhr.open("GET", `/shipment/${shipmentId}/histories/`, true);
  shipmentHistoryXhr.send();

  shipmentHistoryXhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.response);
      response.forEach(function (history) {
        document.getElementById("histories-root").innerHTML +=
          bindHistories(history);
      });
    }
  };
}

function bindHistories(history) {
  return `<div class="w3-row">
              <div
                class="w3-col s3"
                style="
                  border-bottom: 1px solid rgb(245, 245, 245);
                  padding-left: 6px;
                "
              >
                <p class="no-margin-2">${history.date}</p>
              </div>
              <div
                class="w3-col s3"
                style="
                  border-right: 1px solid rgb(245, 245, 245);
                  border-bottom: 1px solid rgb(245, 245, 245);
                  padding-left: 6px;
                "
              >
                <p class="no-margin-2">${history.time}</p>
              </div>
              <div
                class="w3-col s3"
                style="
                  border-right: 1px solid rgb(245, 245, 245);
                  border-bottom: 1px solid rgb(245, 245, 245);
                  padding-left: 6px;
                "
              >
                <p class="no-margin-2">${history.country.countryName}</p>
              </div>
              <div
                class="w3-col s3"
                style="
                  border-right: 1px solid rgb(245, 245, 245);
                  border-bottom: 1px solid rgb(245, 245, 245);
                  padding-left: 6px;
                "
              >
                <p class="no-margin-2">${history.activity}</p>
              </div>
            </div>`;
}


function changeStage(selectedStage) {
  for (let i = 0; i < orderStages.length; i++) {
    orderStages[i].children[0].classList.add("text-primary");
    orderStages[i].children[1].classList.replace(
      "background-primary-light",
      "background-primary"
    );
    orderStages[i].children[1].children[0].style.display = "none";
    orderStages[i].children[1].children[1].style.display = "block";

    if (orderStages[i].id == selectedStage.id) {
      orderStages[i].children[1].children[1].textContent = "local_shipping";
      break;
    }
  }
}

function stopSpinner() {
  document.getElementById("spinner").style.display = "none";
  document.getElementById("content").style.display = "block";
}
