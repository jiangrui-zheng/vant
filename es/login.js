const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET;

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
