const { Post } = require('../models');

const postdata = [
    {
        title: "Nick",
        content: "Soccer Practice",
        date: "2023-07-20",
    },
    {
        title: "Ben",
        content: "Tuba lessons",
        date: "2023-07-20",
    },
    {
        title: "Brandon",
        content: "AC/DC Concert",
        date: "2023-07-22",
    },
    {
        title: "Nicco",
        content: "Star Wars Movie Premiere",
        date: "2023-07-21",
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = {
    seedPosts
}