import { StartFunc as StartFuncFromFetchAsGet } from "./FetchAsGet/entryFile.js";

let StartFunc = ({ inResponse }) => {
   StartFuncFromFetchAsGet();
   console.log("aaaaaaaaaa : ", inResponse);
   jFLocalToInputBillNumberId(inResponse.pk);
   jFLocalToInputInvoiceDateId(inResponse.InvoiceDate);

   Object.entries(inResponse).forEach(([key, value]) => {
      let inputElement = document.getElementById(`HtmlId-${key}`);
      if (inputElement !== null) {
         inputElement.value = value;
      }
   });
};

let jFLocalToInputInvoiceDateId = (inValue) => {
   let jVarLocalHtmlId = 'InvoiceDateId';
   let jVarLocalInvoiceDateId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalInvoiceDateId === null === false) {
      jVarLocalInvoiceDateId.innerHTML = inValue;
   };
};

let jFLocalToInputBillNumberId = (inValue) => {
   let jVarLocalHtmlId = 'BillNumberId';
   let jVarLocalBillNumberId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalBillNumberId === null === false) {
      jVarLocalBillNumberId.innerHTML = inValue;
   };
};

export { StartFunc };
