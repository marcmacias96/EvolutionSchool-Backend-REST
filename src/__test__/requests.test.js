import request from "supertest";
import app from "../app/app";
import mongoose from "mongoose";
var server;
describe("Test de funcionamiento de API-REST", () => {
  test("Obteniendo todos los usuarios del API", async () => {
    const response = await request(app).get("/users");
    expect(response.statusCode).toBe(200);
  });
});
