import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnItemName,LocalCoumnItemNameAlias,LocalCoumnItemCode,LocalCoumnRate,LocalCoumnGstPercentage,LocalCoumnhsn}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnItemName,LocalCoumnItemNameAlias,LocalCoumnItemCode,LocalCoumnRate,LocalCoumnGstPercentage,LocalCoumnhsn});

    return LocalFromDal;
};

export {
    postDefaultFunc
};