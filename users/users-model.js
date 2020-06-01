const bcrypt = require("bcryptjs")
const db = require("../database/config")

async function add(user) {
	// hash the password with a time complexity of 14
	user.password = await bcrypt.hash(user.password, 14)

	const [id] = await db("users").insert(user)
	return findById(id)
}

function find() {
	return db("users").select("id", "username")
}

function findBy(filter) {
	return db("users")
		.select("id", "username", "password")
		.where(filter)
}

function findById(id) {
	return db("users")
		.select("id", "username")
		.where({ id })
		.first()
}

const remove = async id => db('users').where({id}).first().del();


const edit = async (id, user) => {
    await db('users').where({id}).update(user);
    return findOneBy({id})
  };

module.exports = {
	add,
	find,
	findBy,
    findById,
    remove,
    edit
}