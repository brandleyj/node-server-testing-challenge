const db = require("../data/dbConfig");

module.exports = {
	insert,
	remove
};

async function insert(post) {
	return db("posts").insert(post, "id");
}

function remove(id) {
	return db("posts")
		.where("id", id)
		.del();
}
