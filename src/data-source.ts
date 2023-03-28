import "reflect-metadata"
import { DataSource } from "typeorm"
import { Album } from "./entity/Album"
import { Photo } from "./entity/Photo"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.POSTGRES_HOSTNAME,
    port: 5432,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    synchronize: true,
    logging: false,
    entities: [Photo, Album],
    migrations: [],
    subscribers: [],
})
