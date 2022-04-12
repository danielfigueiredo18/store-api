import Sequelize from "sequelize";

const sequelize = new Sequelize(
    "",//string conexão
    {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
)

export {
    sequelize
}