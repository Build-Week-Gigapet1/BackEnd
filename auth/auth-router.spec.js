const request = require("supertest");

const server = require("../api/server.js");

const db = require("../database/dbConfig.js");

describe("auth-router.js", function() {
  beforeEach(async () => {
    await db("users").truncate();
    await db("petfood").truncate();
  });
  describe("Post /register", function() {
    it("should return a 201 OK", function() {
      return request(server)
        .post("/register")
        .send({ username: "me", password: "pass", petname: "Belt" })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
    it("should return a 500 error", function() {
      return request(server)
        .post("/register")
        .send({ password: "pass" })
        .then(res => {
          expect(res.status).toBe(500);
        });
    });
  });
  describe("POST /login", function() {
    it("should return a 200 OK", function() {
      request(server)
        .post("/register")
        .send({ username: "test", password: "test", petname: "test" })
        .then(res => {
          console.log(res.status);
        });
      return request(server)
        .post("/login")
        .send({ username: "test", password: "test" })
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
    it("should return a 401 invalid credentials", function() {
      return request(server)
        .post("/login")
        .send({ username: "user1", password: "passsssss", petname: "Belt" })
        .then(res => {
          expect(res.status).toBe(401);
        });
    });
  });
});
