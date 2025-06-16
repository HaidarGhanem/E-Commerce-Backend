module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,  
            unique: true,
            allowNull: false 
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.ENUM('user', 'admin'), 
            defaultValue: 'user'
        },
        refreshToken: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
        timestamps: true, 
        paranoid: true
    })
    
    return User
}