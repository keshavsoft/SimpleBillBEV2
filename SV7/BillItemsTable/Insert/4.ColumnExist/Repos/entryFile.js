import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnItemName,LocalCoumnRate,LocalCoumnQty,LocalCoumnAmount,LocalCoumnFK,LocalCoumnBatchExp}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnItemName,LocalCoumnRate,LocalCoumnQty,LocalCoumnAmount,LocalCoumnFK,LocalCoumnBatchExp});

    return LocalFromDal;
};

export {
    postDefaultFunc
};