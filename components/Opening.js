module.exports = (sequelize, DataTypes) => {
    const Opening = sequelize.define('opening', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, {
            timestamps: false
        })

    return Opening
}