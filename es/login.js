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

const fs = require('fs');
const path = require('path');

/**
 * @param {string} filename 用户提供的文件名
 * @param {string} baseDir 相对的资源目录，如 'uploads', 'themes'
 * @returns {string} 规范化后的路径
 */
function sanitizePath(filename, baseDir = 'uploads') {
  if (typeof filename !== 'string' || filename.trim() === '') {
    throw new Error('Invalid filename');
  }

  if (filename.includes('..')) {
    throw new Error('Path traversal detected');
  }

  return path.normalize(path.join(__dirname, baseDir, filename));
}

/**
 * @param {string} filename 相对路径
 * @returns {string} 文件内容
 */
function readUserFile(filename) {
  const safePath = sanitizePath(filename, 'uploads');

  if (!fs.existsSync(safePath)) {
    throw new Error('File not found');
  }

  return fs.readFileSync(safePath, 'utf-8');
}

module.exports = {
  login,
  sanitizePath,
  readUserFile
};