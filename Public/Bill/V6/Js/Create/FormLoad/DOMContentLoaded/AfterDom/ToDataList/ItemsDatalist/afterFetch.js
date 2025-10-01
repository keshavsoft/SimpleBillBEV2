const jVarCommonDataListId = "BuyerNameDLId";

const StartFunc = (data) => {
    console.log("data : ", data);

    data.forEach(element => {
        jFLocalAddToItems({ inAddOnService: element });
    });
};

const jFLocalAddToItems = ({ inAddOnService }) => {
    const option = `<option value="${inAddOnService}">${inAddOnService}</option>`
    // var option = $('<option value="' + inItemName + '"></option>');
    $(`#${jVarCommonDataListId}`).append(option);
};

export { StartFunc };