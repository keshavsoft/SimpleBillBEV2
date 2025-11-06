import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
	let LocalCoumnBatchExp = LocalRequestBody.BatchExp;
	let LocalCoumnFK = LocalRequestBody.FK;
	let LocalCoumnAmount = LocalRequestBody.Amount;
	let LocalCoumnQty = LocalRequestBody.Qty;
	let LocalCoumnRate = LocalRequestBody.Rate;
	let LocalCoumnItemName = LocalRequestBody.ItemName;

    let LocalFromRepo = postDefaultFuncFromRepo({LocalCoumnItemName,LocalCoumnRate,LocalCoumnQty,LocalCoumnAmount,LocalCoumnFK,LocalCoumnBatchExp});

    if (LocalFromRepo.KTF === false) {
        res.status(409).send(LocalFromRepo.KReason);
        return;
    };

    res.set('Content-Type', 'text/plain');
    res.send(LocalFromRepo.SuccessText);
};

export {
    postFilterDataFromBodyFunc
};