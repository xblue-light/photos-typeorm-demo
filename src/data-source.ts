import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Photo } from "./entity/Photo"
import { PhotoMetadata } from "./entity/PhotoMetadata.entity"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.POSTGRES_HOSTNAME,
    port: 5432,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    synchronize: true,
    logging: false,
    entities: [Photo, PhotoMetadata],
    migrations: [],
    subscribers: [],
})
