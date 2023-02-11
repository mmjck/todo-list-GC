const supertest = require("supertest");
const models = require("../models");

const app = require("../app");
const request = supertest(app);


function soma(a, b) {
  return a + b;
}

describe("GET /todo", () => {
  beforeAll(async () => {
      await request.post("/todo").send({
        title: "Algum teste",
        description: "Alguma descricao",
        isDone: false,
      });  
  });
  afterAll(async () => {
    await models.sequelize.close();
  });

  it("should return status 200", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
    expect(response.body.error).toBeUndefined();
  });

  it("should return status 200", async () => {
    const response = await request.get("/todo");
    expect(response.status).toBe(200);
    expect(response.body.error).toBeUndefined();
  });
  it("should return ToDos", async () => {
    const response = await request.get("/todo");
    expect(response.body.length).toBeGreaterThan(0);
  });
});