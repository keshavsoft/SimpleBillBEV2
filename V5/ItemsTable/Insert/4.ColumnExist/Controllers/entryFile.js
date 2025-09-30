import {
    postDefaultFunc as postDefaultFuncFromRepo
} from '../Repos/entryFile.js';

let postFilterDataFromBodyFunc = (req, res) => {
    let LocalRequestBody = req.body;
	let LocalCoumnhsn = LocalRequestBody.hsn;
	let LocalCoumnGstPercentage = LocalRequestBody.GstPercentage;
	let LocalCoumnRate = LocalRequestBody.Rate;
	let LocalCoumnItemCode = LocalRequestBody.ItemCode;
	let LocalCoumnItemNameAlias = LocalRequestBody.ItemNameAlias;
	let LocalCoumnItemName = LocalRequestBody.ItemName;

    let LocalFromRepo = postDefaultFuncFromRepo({LocalCoumnItemName,LocalCoumnItemNameAlias,LocalCoumnItemCode,LocalCoumnRate,LocalCoumnGstPercentage,LocalCoumnhsn});

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