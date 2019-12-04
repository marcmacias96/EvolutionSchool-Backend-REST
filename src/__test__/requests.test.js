import request from "supertest";
import app from "../app/app";

describe("Test de funcionamiento de peticiones Get API-REST", () => {
  test("Creando un nuevo usuario", async () => {
    const user = {
      usr_names: "Jose",
      usr_lastNames: "Perez",
      usr_user: "josep",
      usr_email: "jose@gmail.com",
      usr_password: "12345",
      usr_personalID: 1315204105
    };
    const response = await request(app)
      .post("/users")
      .send(user)
      .set("Accept", "application/json");
    expect(response.statusCode).toBe(200);
  });
});

describe("Test de funcionamiento de peticiones Get API-REST", () => {
  test("Obteniendo todos los usuarios del API", async () => {
    const response = await request(app).get("/users");
    expect(response.statusCode).toBe(200);
  });
});
