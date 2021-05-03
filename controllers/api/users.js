const User = require('../../models/user');
const jwt = require('jsonwebtoken');

module.exports = {
  create
};

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    // Yes, we can send back a simple string
    res.json(token);
  } catch {
    // Client will check for non-200 status code
    // 400 = Bad Request
    res.status(400).json(err);
  }
}

/*--- Helper Functions ---*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}