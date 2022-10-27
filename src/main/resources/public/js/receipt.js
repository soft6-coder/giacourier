let companyName = document.getElementById("company-name-etx");
let companyStreet = document.getElementById("company-street-address-etx");
let companyCity = document.getElementById("company-city-state-etx");
let companyZip = document.getElementById("company-zip-etx");
let companyPhone = document.getElementById("company-phone-etx");
let companyMail = document.getElementById("company-mail-etx");
let invoice = document.getElementById("invoice-etx");
let date = document.getElementById("date-etx");
let clientName = document.getElementById("client-name-etx");
let clientStreet = document.getElementById("client-street-etx");
let clientCity = document.getElementById("client-city-etx");
let clientZip = document.getElementById("client-zip-etx");
let subTotal = document.getElementById("subtotal-etx");
let discount = document.getElementById("discount-etx");
let tax = document.getElementById("tax-etx");
let total = document.getElementById("total-etx");
let comment = document.getElementById("comment-etx");
let dueDays = document.getElementById("due-days-etx");

let description = document.getElementById("description-etx");
let hours = document.getElementById("hours-etx");
let amountPerHour = document.getElementById("amount-per-hour-etx");
let totalAmount = document.getElementById("total-amount-etx");

let descriptionArray = [];

document.body.addEventListener("click", function (e) {
  let targetId = e.target.id;

  if (targetId == "download") {
    let pdf = document.getElementById("pdf");
    let opt = {
      margin: 0.3,
      filename: "GIA-COURIER Invoice.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 4 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(opt).from(pdf).save();
  } else if (targetId == "add") {
    let descriptionObj = {
      description: description.value,
      hours: hours.value,
      amountPerHour: amountPerHour.value,
      total: totalAmount.value,
    };
    document.getElementById("description-root").innerHTML +=
      bindDescription(descriptionObj);
    descriptionArray.push(descriptionObj);
  } else if (targetId == "create") {
    createReceipt();
  }
});

function createReceipt() {
  document.getElementById("company-name").textContent = companyName.value;
  document.getElementById("street-address").textContent = companyStreet.value;
  document.getElementById("city-state").textContent = companyCity.value;
  document.getElementById("company-zip-code").textContent = companyZip.value;
  document.getElementById("phone").textContent = companyPhone.value;
  document.getElementById("email").textContent = companyMail.value;
  document.getElementById("invoice").textContent = invoice.value;
  document.getElementById("date").textContent = date.value;
  document.getElementById("name-client").textContent = clientName.value;
  document.getElementById("client-street-address").textContent =
    clientStreet.value;
  document.getElementById("client-city-state").textContent = clientCity.value;
  document.getElementById("zip-code").textContent = clientZip.value;
  document.getElementById("comment").textContent = comment.value;
  document.getElementById("due-days").textContent = dueDays.value;
  document.getElementById("subtotal").textContent = subTotal.value;
  document.getElementById("discount").textContent = discount.value;
  document.getElementById("tax").textContent = tax.value;
  document.getElementById("total").textContent = total.value;

  document.getElementById("receipt-creator").style.display = "none";
  document.getElementById("receipt").style.display = "block";

  descriptionArray.forEach(function (item) {
    document.getElementById("description-root-2").innerHTML +=
      bindDescription2(item);
  });
  for(let i = 0; i < 5; i++) {
    document.getElementById("description-root-2").innerHTML +=
      bindDescription3();
  }
}

function bindDescription(description) {
  return `
    <div
    class="w3-row"
    style="
      background-color: rgb(236, 237, 255);
      color: rgb(56, 56, 56);
      padding: 0px 0px;
      border-bottom: 1px solid rgb(121, 121, 121);
      border-top: 1px solid rgb(121, 121, 121);
    "
  >
    <div
      class="w3-col s5 w3-center"
      style="
        border-right: 1px solid rgb(121, 121, 121);
        border-left: 1px solid rgb(121, 121, 121);
        height: 19px;
      "
    >
      ${description.description}
    </div>
    <div
      class="w3-col s2 w3-center"
      style="border-right: 1px solid rgb(121, 121, 121); height: 19px"
    >
      ${description.hours}
    </div>
    <div
      class="w3-col s2 w3-center"
      style="border-right: 1px solid rgb(121, 121, 121); height: 19px"
    >
      ${description.amountPerHour}
    </div>
    <div
      class="w3-col s3 w3-center"
      style="border-right: 1px solid rgb(121, 121, 121); height: 19px"
    >
      ${description.total}
    </div>
  </div>
    `;
}
function bindDescription2(description) {
  return `
      <div
      class="w3-row small"
      style="
        background-color: rgb(236, 237, 255);
        color: rgb(56, 56, 56);
        padding: 0px 0px;
        border-bottom: 1px solid rgb(121, 121, 121);
      "
    >
      <div
        class="w3-col s5 w3-center"
        style="
          border-right: 1px solid rgb(121, 121, 121);
          border-left: 1px solid rgb(121, 121, 121);
          height: 19px;
        "
      >
        ${description.description}
      </div>
      <div
        class="w3-col s2 w3-center"
        style="border-right: 1px solid rgb(121, 121, 121); height: 19px"
      >
        ${description.hours}
      </div>
      <div
        class="w3-col s2 w3-center"
        style="border-right: 1px solid rgb(121, 121, 121); height: 19px"
      >
        ${description.amountPerHour}
      </div>
      <div
        class="w3-col s3 w3-center"
        style="border-right: 1px solid rgb(121, 121, 121); height: 19px"
      >
        ${description.total}
      </div>
    </div>
      `;
}
function bindDescription3() {
    return `
        <div
        class="w3-row small"
        style="
          background-color: rgb(236, 237, 255);
          color: rgb(56, 56, 56);
          padding: 0px 0px;
          border-bottom: 1px solid rgb(121, 121, 121);
        "
      >
        <div
          class="w3-col s5 w3-center"
          style="
            border-right: 1px solid rgb(121, 121, 121);
            border-left: 1px solid rgb(121, 121, 121);
            height: 19px;
          "
        >
          
        </div>
        <div
          class="w3-col s2 w3-center"
          style="border-right: 1px solid rgb(121, 121, 121); height: 19px"
        >
          
        </div>
        <div
          class="w3-col s2 w3-center"
          style="border-right: 1px solid rgb(121, 121, 121); height: 19px"
        >
          
        </div>
        <div
          class="w3-col s3 w3-center"
          style="border-right: 1px solid rgb(121, 121, 121); height: 19px"
        >
          
        </div>
      </div>
        `;
  }
