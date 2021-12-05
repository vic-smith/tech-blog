const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: "It's the only one I know.",
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'I like Thunder Client for testing API routes.',
    user_id: 2,
    post_id: 4
  },
  {
    comment_text: "What about handlebars?",
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'Rasperry Pi all day!',
    user_id: 2,
    post_id: 3
  },
  {
    comment_text: "Each product serves it's own purpose.",
    user_id: 1,
    post_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
