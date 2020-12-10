const db = require('../../database/dbConfig')
const posts = 'posts'

async function getAll() {
    const allposts = await db(posts)
        .select('id', 'title', 'description', 'date')
    return allposts
}

async function findById(id) {
    const post = await db(posts)
        .where({ id })
        .first()

    return post
}

async function addPost(title, description, body) {
    const post = {
        title: title,
        description: description,
        body: body,
        date: Date.now()
    }

    const [id] = await db(posts).insert(post)

    return findById(id)
}

async function updatePost(data, id) {
    const newId = await db(posts).update(data)

    return newId
}

async function delelePost(id) {
    const post = await findById(id)
    if (post) {
        const deleted = await db(posts)
            .where({ id })
            .del()
        if (deleted) {
            return post
        }
    }
}

module.exports = {
    getAll,
    findById,
    addPost,
    updatePost,
    delelePost
}