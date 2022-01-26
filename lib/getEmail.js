function getEmail (name) {
    name = name.split(" ")
    return `${name[0]}.${name[1]}@business.com`
}
module.exports = getEmail