const { UserServices } = require('../services/auth.service')

const register = async (req,res) => {
    try {
        const {name, email , password} = req.body
        const result = await UserServices.register(name, email , password)
        res.status(201).json(result)
    } catch (error) {
        res.status(500).json({message: 'Error registering user', error: error.message})
    }
}

const login = async (req,res) => {
    try {
        const {email , password} = req.body
        const result = await UserServices.login(email , password)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: 'Error registering user', error: error.message})
    }
}

module.exports = { register , login }