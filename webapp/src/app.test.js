const request = require("supertest");
const app = require("./app");

describe("GET /", () => {
  test("should return the task object", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ task: "6-1 pipeline" });
  });
});

describe("GET /addTwoNumbers", () => {
  test("should calculate the sum of two numbers", async () => {
    const response = await request(app)
      .get("/addTwoNumbers")
      .query({ a: "5", b: "3" });
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: 8 });
  });

  test("should return 400 for invalid inputs", async () => {
    const response = await request(app)
      .get("/addTwoNumbers")
      .query({ a: "x", b: "y" });
    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({ error: "Invalid input numbers" });
  });
});
