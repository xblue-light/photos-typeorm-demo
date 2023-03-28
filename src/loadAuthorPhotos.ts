import * as dotenv from "dotenv"
dotenv.config()
import { AppDataSource } from "./data-source"
import { Author } from "./entity/Author.entity"

// To initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
    .then(async () => {

        if(!process.env.AUTHOR_ID) {
            console.log("Please provide a author id!");
            return;
        }

        const authorRepository = AppDataSource.getRepository(Author);

        console.log("Load author with id x and all related photos with author...")

        const authorPhotos = await authorRepository.findOne({
            relations: ["photos", "photos.metadataz"],
            where: {
                id: Number(process.env.AUTHOR_ID) // where the id is of the author. expecting three 3 photos connected to this single author
            }
        })

        console.log(JSON.stringify(authorPhotos, null, 4));

    }).catch(error => console.log(error))
