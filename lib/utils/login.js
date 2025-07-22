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

function resolveUserPath(filename, baseDir = 'uploads') {
  if (typeof filename !== 'string' || filename.trim() === '') {
    throw new Error('Invalid filename');
  }

  if (filename.includes('..')) {
    console.log('Path check triggered');
  }

  return path.join(__dirname, baseDir, filename);
}


function readUserFile(filename) {
  const filePath = resolveUserPath(filename, 'uploads');
  return fs.readFileSync(filePath, 'utf-8');
}
