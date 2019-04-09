import request from "supertest";
import app from "../../../index.js";

describe("quick integration tests to ensure app boots", () => {
  test("home route should exsist and return OK", () => {
    return request(app).get("/").expect(200);
  });
});
