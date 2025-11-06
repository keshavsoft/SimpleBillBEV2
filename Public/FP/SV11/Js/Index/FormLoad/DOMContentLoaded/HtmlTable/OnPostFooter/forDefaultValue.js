let StartFunc = ({ inColumns, inFooterCells }) => {
    LocalFuncForDefaultValue({ inColumns, inFooterCells });
    LocalFuncForTypeDate({ inColumns, inFooterCells });
};

let LocalFuncForDefaultValue = ({ inColumns, inFooterCells }) => {
    const jVarLocalColumns = inColumns;
    const jVarLocalFooterCells = inFooterCells;

    const jVarLocalDefaultValues = jVarLocalColumns.map(element => {
        return element.defaultvalue;
    });
    console.log("jVarLocalDefaultValues : ", jVarLocalDefaultValues);

    jVarLocalFooterCells.forEach((element, LoopIndex) => {
        if (jVarLocalDefaultValues[LoopIndex] !== undefined) {
            const LoopInsideInput = element.querySelector("input");

            LoopInsideInput.value = jVarLocalDefaultValues[LoopIndex];
        };
    });
};

const LocalFuncForTypeDate = ({ inColumns, inFooterCells }) => {
    const jVarLocalColumns = inColumns;
    const jVarLocalFooterCells = inFooterCells;

    const jVarLocalDefaultValues = jVarLocalColumns.map(element => {
        if (element.type === "date") {
            const date = new Date();

            return date.toISOString().split("T")[0];
        };
    });

    jVarLocalFooterCells.forEach((element, LoopIndex) => {
        if (jVarLocalDefaultValues[LoopIndex] !== undefined) {
            const LoopInsideInput = element.querySelector("input");

            LoopInsideInput.value = jVarLocalDefaultValues[LoopIndex];
        };
    });
};

export { StartFunc };