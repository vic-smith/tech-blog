const { Post } = require('../models');

const postdata = [
  {
    title: 'Is JavaScript the best programming language?',
    post_url: "https://www.hackreactor.com/blog/why-javascript-is-the-best-coding-language-to-learn",
    context: 'JavaScript is the most popular language, and is still increasing in popularity.',
    user_id: 1
  },
  {
    title: 'Most popular npm packages 2021.',
    post_url: "",
    context: 'Express, socket.io, async, rxjs, lodash, underscore, ramda.',
    user_id: 2
  },
  {
    title: 'Raspberry Pi vs Arduino.',
    post_url: "https://www.tomshardware.com/features/raspberry-pi-vs-arduino",
    context: 'The Arduino is a truly versatile board but the Raspberry Pi is a full computer and a hardware hacking platform.',
    user_id: 1
  },
  {
    title: 'Essential vs code extensions.',
    post_url: "",
    context: 'Settings Sync, Live Server, Remote-SSH.',
    user_id: 3
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
