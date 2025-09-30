import {
    postDefaultFunc as postDefaultFuncFromDal
} from '../Dals/entryFile.js';

let postDefaultFunc = ({LocalCoumnItemName,LocalCoumnRate,LocalCoumnQty,LocalCoumnAmount}) => {
    let LocalFromDal = postDefaultFuncFromDal({LocalCoumnItemName,LocalCoumnRate,LocalCoumnQty,LocalCoumnAmount});

    return LocalFromDal;
};

export {
    postDefaultFunc
};