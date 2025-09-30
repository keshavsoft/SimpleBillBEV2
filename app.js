import express from 'express';
import cookieParser from 'cookie-parser';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
// const port = 3000;

var port = normalizePort(process.env.PORT || 3000);

import { StartFunc as StartFuncFromMiddleware } from "./Token/MiddleWares/entryFile.js";

import { router as routerFromSecret } from "./Secret/routes.js";
import { router as routerFromUsers } from "./Users/routes.js";
import { router as routerFromV5 } from "./V5/routes.js";
import { router as routerFromSV5 } from "./SV5/routes.js";
import { router as routerFromV6 } from "./V6/routes.js";
import { router as routerFromSV6 } from "./SV6/routes.js";

app.use(express.static('Public'));
app.use(cookieParser());

app.use("/Secret", routerFromSecret);
app.use("/Users", routerFromUsers);
app.use("/V5", routerFromV5);
app.use("/SV5", StartFuncFromMiddleware, routerFromSV5);
app.use("/V6", routerFromV6);
app.use("/SV6", StartFuncFromMiddleware, routerFromSV6);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log(`Open here http://localhost:${port}`);
});