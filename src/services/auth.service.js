require('dotenv').config()

const User = require('../db/postgres/models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

class UserServices {
    static async register (name, email , password){
        try {

            //Check Existing of the User
            const existingUser  = User.findOne({where: {email}})
            if(existingUser ){
                throw new Error(`email is already in use`)
            }

            //Hash the Passowrd
            const hashedPassword = await bcrypt.hash(password , 10)

            //Create the User
            const newUser = await User.create({name , email , password: hashedPassword})

            //Return Result
            const userData = newUser.toJSON()
            delete userData.password
            return userData

        } catch (error) {
            throw error
        }
    }
    static async login (email, password){
        try {
            
            //Find User by Email
            const user = await User.findOne({where: {email}})
            if(!user){
                throw new Error(`invalid credentials`)
            }

            //Compare Password
            const isMatch = await bcrypt.compare(password , user.password)
            if(!isMatch){
                throw new Error(`invalid credentials`)
            }

            //Generate Token
            const token = jwt.sign({id: user.id , emai: user.email}, process.env.JWT_SECRET , { expiresIn: '1h'})

            //Return Result
            const userData = user.toJSON()
            delete userData.password
            return { user: userData , token }

        } catch (error) {
            throw error
        }
    }
}

module.exports = UserServices