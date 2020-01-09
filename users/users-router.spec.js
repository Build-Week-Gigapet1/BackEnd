const request = require("supertest");

const server = require("../api/server.js");

const Users = require("./users-model.js");
const db = require("../database/dbConfig.js");

describe("GET /users", function() {
  it("should return a 200 OK", function() {
    return request(server)
      .get("/auth/users")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});
