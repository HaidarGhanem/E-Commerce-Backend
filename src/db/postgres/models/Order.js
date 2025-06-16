module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        userId: {
            type: DataTypes.UUID, 
            allowNull: false,
            references: { 
                model: 'Users', 
                key: 'id'
            }
        },
        status: {
            type: DataTypes.ENUM('pending', 'completed', 'canceled'), 
            defaultValue: 'pending'
        },
        total: {
            type: DataTypes.NUMBER,
            allowNull: false,
            validate: {
                min: 0 
            }
        }
    }, {
        timestamps: true,
        paranoid: true
    })

    Order.associate = (models) => {
        Order.belongsTo(models.User, { 
            foreignKey: 'userId',
            as: 'user'
        })
    }

    return Order
}