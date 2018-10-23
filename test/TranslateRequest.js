"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TranslateRequest {
    static getRequest(req, obj) {
        return req
            .post("/translate/v2")
            .set("Content-Type", "application/x-www-form-urlencoded")
            .send(obj);
    }
}
exports.TranslateRequest = TranslateRequest;
//# sourceMappingURL=TranslateReqeust.js.map
