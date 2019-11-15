const request = require("supertest");

const posts = require("./postsRouter");

describe("posts", () => {
	it("db environment set to testing", () => {
		expect(process.env.DB_ENV).toBe("testing");
	});

	describe("POST /posts", () => {
		it("should return a status of 201 Created", () => {
			return request(posts)
				.post("/posts")
				.send({ title: "title", body: "test body" })
				.then(res => {
					expect(res.status).toBe(201);
				});
		});
	});

	describe("DELETE /posts/:id", () => {
		it("should return a status of 200 ok", () => {
			return request(posts)
				.delete("/posts/1")
				.then(res => {
					expect(res.status).toBe(200);
				});
		});
	});
});
