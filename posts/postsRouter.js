const router = require("express").Router();

const Posts = require("./postsModel");

router.post("/post", (req, res) => {
	const post = req.body;

	Posts.insert(post)
		.then(addedPost => {
			res.status(201).json(addedPost);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

router.delete("/posts/:id", (req, res) => {
	const {
		params: { id }
	} = req;

	Posts.remove(id)
		.then(deletedPost => {
			res.status(200).json(deletedPost);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

module.exports = router;
