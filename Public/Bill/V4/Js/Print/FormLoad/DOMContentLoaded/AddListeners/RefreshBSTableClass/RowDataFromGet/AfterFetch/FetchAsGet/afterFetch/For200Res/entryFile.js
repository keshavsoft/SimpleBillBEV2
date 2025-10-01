
let StartFunc = ({ inResponseAsJson }) => {
    inResponseAsJson.forEach(LocalFuncForTemplate);

    const jVarLocalAmountArray = inResponseAsJson.map(element => {
        return element.Rate * element.Qty;
    });

    const sum = jVarLocalAmountArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const jVarLocalTaxableValue = sum * 100 / 118;
    const jVarLocalTaxString = `(CGST ₹${((sum - jVarLocalTaxableValue) / 2).toFixed(2)} + SGST ₹${((sum - jVarLocalTaxableValue) / 2).toFixed(2)})`;

    LocalFuncForTotal(sum);

    jFLocalToInputTaxableValueId(`₹ ${jVarLocalTaxableValue.toFixed(2)}`);
    jFLocalToInputTaxSplitId(jVarLocalTaxString);
};

const LocalFuncForTemplate = (element, LoopIndex) => {
    const inRowData = element;

    // Test to see if the browser supports the HTML template element by checking
    // for the presence of the template element's content attribute.
    if ("content" in document.createElement("template")) {
        // Instantiate the table with the existing HTML tbody
        // and the row with the template
        const tbody = document.querySelector("#TableBodyId");
        const template = document.querySelector("#TemplateForRowId");

        // Clone the new row and insert it into the table
        const clone = template.content.cloneNode(true);
        let td = clone.querySelectorAll("td");
        td[0].textContent = LoopIndex + 1;
        td[1].textContent = inRowData.ItemName;
        td[2].textContent = inRowData.Qty;
        td[3].textContent = inRowData.Rate;
        td[4].textContent = inRowData.Qty * inRowData.Rate;

        tbody.appendChild(clone);
    } else {
        // Find another way to add the rows to the table because
        // the HTML template element is not supported.
    };
};

const LocalFuncForTotal = (inAmount) => {
    if ("content" in document.createElement("template")) {
        // Instantiate the table with the existing HTML tbody
        // and the row with the template
        const tbody = document.querySelector("#TableBodyId");
        const template = document.querySelector("#TemplateForTotalRowId");

        // Clone the new row and insert it into the table
        const clone = template.content.cloneNode(true);
        let td = clone.querySelectorAll("td");
        td[1].textContent = `₹ ${inAmount}`;

        tbody.appendChild(clone);
    } else {
        // Find another way to add the rows to the table because
        // the HTML template element is not supported.
    };
};

let jFLocalToInputTaxableValueId = (inValue) => {
    let jVarLocalHtmlId = 'TaxableValueId';
    let jVarLocalTaxableValueId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalTaxableValueId === null === false) {
        jVarLocalTaxableValueId.innerHTML = inValue;
    };
};

let jFLocalToInputTaxSplitId = (inValue) => {
    let jVarLocalHtmlId = 'TaxSplitId';
    let jVarLocalTaxSplitId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalTaxSplitId === null === false) {
        jVarLocalTaxSplitId.innerHTML = inValue;

    };
};

export { StartFunc };
