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
class DetectRequest {
    static getRequest(req, obj) {
        return req
            .post("/translate/v2/detect")
            .set("Content-Type", "application/x-www-form-urlencoded")
            .send(obj);
    }
}
exports.DetectRequest = DetectRequest;
class LanguagesRequest {
    static getRequest(req, obj) {
        return req
            .post("/translate/v2/languages")
            .set("Content-Type", "application/x-www-form-urlencoded")
            .send(obj);
    }
}
exports.LanguagesRequest = LanguagesRequest;
//# sourceMappingURL=Requests.js.map