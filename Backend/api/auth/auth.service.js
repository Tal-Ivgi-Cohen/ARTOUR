const bcrypt = require('bcrypt')
const userService = require('../user/user.service')
const logger = require('../../service/logger.service')


async function login(email, password) {
    const user = await userService.getByUserMail(email)
    if (!user) return Promise.reject('Invalid username or password')
    delete user.password
    return user
}

async function signup(username, password, fullname, isAdmin) {
    const saltRounds = 10

    logger.debug(`auth.service - signup with username: ${username}, fullname: ${fullname}`)
    if (!username || !password || !fullname) return Promise.reject('fullname, username and password are required!')

    const hash = await bcrypt.hash(password, saltRounds)
    return userService.add({ username, password: hash, fullname, isAdmin})
}

module.exports = {
    signup,
    login,
}
