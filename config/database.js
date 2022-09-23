require ('dotenv').config()

module.exports = {
  //Configuracion base de datos
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || null,
  database: process.env.DB_DATABASE || "database_development",
  host: process.env.DB_HOST || "127.0.0.1",
  dialect: process.env.DB_DIALECT|| "postgres",

  //configurar seeds
  seederStorage: "sequelize",
  seederStorageTableName: "seeds",

  //configuracion de migraciones 
  migrationStorage: "sequelize",
  migrationsStorageTableName:"migrations"
}