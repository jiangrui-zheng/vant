const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET;

if (!SECRET_KEY) {
  throw new Error("Missing JWT_SECRET environment variable. Please set it to a strong secret (e.g., openssl rand -hex 32).");
}

async function login(username, password, getUserByUsername) {
  if (!username || !password) {
    return { error: '用户名和密码不能为空' };
  }

  const user = await getUserByUsername(username);
  if (!user) {
    return { error: '用户名或密码错误' };
  }

  const passwordMatch = await bcrypt.compare(password, user.passwordHash);
  if (!passwordMatch) {
    return { error: '用户名或密码错误' };
  }

  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
  return { token };
}

const path = require('path');

function sanitizePath(inputPath) {
  if (inputPath.includes('..')) {
    throw new Error('Path traversal detected');
  }
  return path.join(__dirname, 'uploads', inputPath);
}

module.exports = { login };
