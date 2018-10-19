module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('employee', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        picture: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        big: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {
            timestamps: false
        })

    // Employee.bulkCreate(seed, { fields: ['name', 'picture', 'big'], validate: true }).catch(err => {
    //     console.log('* error in bulk create employees', err)
    // }).then(() => {
    //     console.log('* bulk create employees finished')
    // })

    return Employee
}