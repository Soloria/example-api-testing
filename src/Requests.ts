export class TranslateRequest {
  public static getRequest(req: any, obj: any): any {
    return req
      .post("/translate/v2")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .send(obj);
  }
}

export class DetectRequest {
  public static getRequest(req: any, obj: any): any {
    return req
      .post("/translate/v2/detect")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .send(obj);
  }
}

export class LanguagesRequest {
  public static getRequest(req: any, obj: any): any {
    return req
      .post("/translate/v2/languages")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .send(obj);
  }
}