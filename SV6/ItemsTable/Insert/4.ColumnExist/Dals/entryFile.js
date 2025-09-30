import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnItemName,LocalCoumnItemNameAlias,LocalCoumnItemCode,LocalCoumnRate,LocalCoumnGstPercentage,LocalCoumnhsn}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnItemName,LocalCoumnItemNameAlias,LocalCoumnItemCode,LocalCoumnRate,LocalCoumnGstPercentage,LocalCoumnhsn});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};