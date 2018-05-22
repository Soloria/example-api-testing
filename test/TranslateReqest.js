"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TranslateReqest {
    static getRequest(req, obj) {
        return req
            .post("/translate/v2")
            .set("Content-Type", "application/x-www-form-urlencoded")
            .send(obj);
    }
}
exports.TranslateReqest = TranslateReqest;
//# sourceMappingURL=TranslateReqest.js.map