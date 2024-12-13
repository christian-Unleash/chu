const { text } = require('express')
const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
title: {
    type: String,
    required: true
},
content: {
    type: text,
},
images: {
    type: String
}
}, {
    Timestamp: true
})

const Post = mongoose.model('Post', Post)

module.exports = Post