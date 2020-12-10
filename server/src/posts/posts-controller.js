const postsModel = require('./posts-model')
const theError = {error: "sum ting wong"}

exports.getPosts = async (req, res) => {
    const posts = await postsModel.getAll()
    if (posts) {
        res.status(200).json(posts)
    } else {
        res.status(500).json(theError)
    }
}

exports.getPostById = async (req, res) => {
    const post = await postsModel.findById(req.params.id)
    if (post) {
        res.status(200).json(post)
    } else {
        res.status(500).json(theError)
    }
}

exports.addPost = async (req, res) => {
    try {
        const { title, description, body } = req.body
        const post = {
            title: title,
            description: description,
            body: body
        }
        if (post) {
            newPost = await postsModel.addPost(post.title, post.description, post.body)
            res.status(201).json(newPost)
        } else if (!post.tile) {
            res.status(422).json({message: "you must have a title"})
        } else if (!post.description) {
            res.status(422).json({message: "you must have a description"})
        } else if (!post.body) {
            res.status(422).json({message: "you must have a body"})
        } else {
            res.status(422).json({message: "you cannot post nothing"})
        }
    } catch {
        res.status(500).json(theError)
    }
}

exports.updatePost = async (req, res) => {
    try {
        const data = req.body
        const id = req.params.id
        if (id && data) {
            newPost = postsModel.updatePost(data, id)
            res.status(202).json(newPost)
        } else if (!id) {
            res.status(422).json({message: "you must have an id"})
        } else if (!data) {
            res.status(422).json({message: "you must have a change to submit"})
        }
    } catch {
        res.status(500).json(theError)
    }
}

exports.delPost = async (req, res) => {
    try {
        const id  = req.params.id
        if (id) {
            const deleted = postsModel.delelePost(id)
            res.status(204).json(deleted)
        } else {
            res.status(422).json({message: "you must have an id"})
        }
    } catch {
        res.status(500).json(theError)
    }
}