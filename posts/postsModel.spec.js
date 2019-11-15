const db = require("../data/dbConfig");

const Posts = require("./postsModel");

describe("posts model", () => {
	beforeEach(async () => {
		await db("posts").truncate();
	});

	describe("insert()", () => {
		it("should insert the post into the database", async () => {
			const query = await Posts.insert({
				title: "title",
				body: "body test"
			});
			console.log(query);

			const posts = await db("posts");

			expect(posts).toHaveLength(1);
		});
	});
	describe("remove()", () => {
		it("should remove the post from the database", async () => {
			const query = await Posts.remove(2);

			const posts = await db("posts");

			expect(posts).toHaveLength(0);
		});
	});
});
