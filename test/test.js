"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Requests_1 = require("./Requests");
const request = require("supertest")("https://translation.googleapis.com/language");
const apikey = require("./config").Config.APIKey;
/* Translate method.
query params:
  'key' - API-key, required
  'q' - the input text to translate in string format, required
  'target' - the language to use for translation of the input text (language code, for example - 'en', 'ru'), required
*/
describe("Translate method tests", () => {
    describe("translate eng string to rus", () => {
        it("check that response is ok and translate with detected language is correct", done => {
            Requests_1.TranslateRequest.getRequest(request, {
                key: apikey,
                q: "hello",
                target: "ru"
            })
                .expect(200) // check that response is ok
                .expect(res => {
                res.body.data.translations[0].translatedText = "Здравствуйте"; // check that translate is correct
                res.body.data.translations[0].detectedSourceLanguage = "en"; // check that source language detected correctly
            })
                .end(done);
        });
    });
    describe("translate numbers", () => {
        it("check that response is ok and numbers not translated", done => {
            Requests_1.TranslateRequest.getRequest(request, {
                key: apikey,
                q: "hello",
                target: "ru"
            })
                .expect(200) // check that response is ok
                .expect(res => {
                res.body.data.translations[0].translatedText = "1234"; // check that numbers not translated
            })
                .end(done);
        });
    });
    describe("translate empty string", () => {
        it("check that response is ok and translated text is empty", done => {
            Requests_1.TranslateRequest.getRequest(request, {
                key: apikey,
                q: "",
                target: "ru"
            })
                .expect(200) //check that response is ok
                .expect(res => {
                res.body.data.translations[0].translatedText = ""; // check that translated text is empty
            })
                .end(done);
        });
    });
});
/*Detect method.
query params:
  'key' - API-key
  'q' - the input text upon which to perform language detection
*/
describe("Detect method tests", () => {
    describe("detect english language", () => {
        it("check that response is ok and detected correct language", done => {
            Requests_1.DetectRequest.getRequest(request, {
                key: apikey,
                q: "Hello"
            })
                .expect(200) // check that response is ok
                .expect(res => {
                res.body.data.detections[0][0].language = "en"; // check that detected language is correct
            })
                .end(done);
        });
    });
    describe("detect language in alphanumeric string", () => {
        it("check that response is ok and detected language is not english", done => {
            Requests_1.DetectRequest.getRequest(request, {
                key: apikey,
                q: "He12135442356llo"
            })
                .expect(200) // check that response is ok
                .expect(res => {
                res.body.data.detections[0][0].language != "en"; // check that detected language is not english
            })
                .end(done);
        });
    });
    describe("detect language in empty string", () => {
        it("check that response is ok and detected language is undefined", done => {
            Requests_1.DetectRequest.getRequest(request, {
                key: apikey,
                q: ""
            })
                .expect(200) // check that response is ok
                .expect(res => {
                res.body.data.detections[0][0].language = "und"; // check that detected language is undefined
            })
                .end(done);
        });
    });
});
/*Languages method.
query params:
  'key' - API-key
  'target' - the target language code for the results
*/
describe("Languages method tests", () => {
    describe("supported languages with english target", () => {
        it("check that response is ok and name on target language", done => {
            Requests_1.LanguagesRequest.getRequest(request, {
                key: apikey,
                target: "en"
            })
                .expect(200) // check that response is ok
                .expect(res => {
                res.body.data.languages[0].name = "Afrikaans"; // check that languages name on target language
            })
                .end(done);
        });
    });
    describe("supported languages with numeric target", () => {
        it("check that response is bad and error message about invalid target language", done => {
            Requests_1.LanguagesRequest.getRequest(request, {
                key: apikey,
                target: "1234"
            })
                .expect(400) // check that response is bad
                .expect(res => {
                res.body.error.message = "Target language is invalid."; // check that error message about invalid target language
            })
                .end(done);
        });
    });
    describe("supported languages with empty target", () => {
        it("check that response is ok and target language is undefined", done => {
            Requests_1.LanguagesRequest.getRequest(request, {
                key: apikey,
                target: ""
            })
                .expect(200) // check that response is ok
                .expect(res => {
                res.body.data.languages[0].name = undefined; // check that target language is undefined
            })
                .end(done);
        });
    });
});
//# sourceMappingURL=test.js.map