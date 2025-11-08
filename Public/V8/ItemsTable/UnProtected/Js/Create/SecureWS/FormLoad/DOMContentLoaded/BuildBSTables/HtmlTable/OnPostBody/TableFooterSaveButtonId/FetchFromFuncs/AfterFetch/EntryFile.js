import { StartFunc as status200 } from "./status200.js";
import { StartFunc as status409 } from "./status409.js";

let StartFunc = async ({ Res }) => {
    if (Res.status === 200) {
        status200();
    };
    if (Res.status !== 200) {
        status409(Res);
    };
};

export { StartFunc };