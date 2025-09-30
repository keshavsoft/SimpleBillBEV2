import { StartFunc as StartFuncFromInsertToFile } from '../KFs/insertToFile.js';

let postDefaultFunc = ({LocalCoumnItemName,LocalCoumnRate,LocalCoumnQty,LocalCoumnAmount}) => {
    let LocalFromLowDb = StartFuncFromInsertToFile({LocalCoumnItemName,LocalCoumnRate,LocalCoumnQty,LocalCoumnAmount});

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};