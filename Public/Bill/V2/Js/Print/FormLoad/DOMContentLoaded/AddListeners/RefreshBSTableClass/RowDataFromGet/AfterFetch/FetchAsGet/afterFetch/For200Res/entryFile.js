let StartFunc = ({ inResponseAsJson }) => {
    inResponseAsJson.forEach(LocalFuncForTemplate);
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

export { StartFunc };