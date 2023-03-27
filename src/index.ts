import * as dotenv from 'dotenv'
dotenv.config()
import { AppDataSource } from "./data-source"
import { Photo } from "./entity/Photo"
import { Author } from './entity/Author.entity'
import { PhotoMetadata } from './entity/PhotoMetadata.entity'

// To initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
    .then(async () => {

        // // Photo entity repository
        const photoRepository = AppDataSource.getRepository(Photo);
        const authorRepository = AppDataSource.getRepository(Author);

        // // New author entity and set its properties
        // const author = new Author()
        // author.name = "Stephen King"

        // // Create a new Photo entities and set its properties:
        // const photo1 = new Photo()
        // photo1.description = "Burt and Vicky are traveling through Nebraska on their way to California on a vacation meant to save their failing marriage."
        // photo1.filename = "children-of-the-corn.jpeg"
        // photo1.isPublished = true
        // photo1.name = "Children of the Corn"
        // photo1.views = 20

        // // create photo metadata object
        // const metadata1 = new PhotoMetadata()
        // metadata1.compressed = true
        // metadata1.height = 455
        // metadata1.width = 355
        // metadata1.orientation = "portrait"
        // metadata1.comment = "JDK"

        // // add metadata for photo1
        // photo1.metadataz = metadata1

        // const photo2 = new Photo()
        // photo2.description = "Vince Teague and Dave Bowie are the sole operators of The Weekly Islander, a small Maine newspaper. Stephanie McCann has been working for them as an intern."
        // photo2.filename = "the-colorado-kid.jpeg"
        // photo2.isPublished = true
        // photo2.name = "The Colorado Kid"
        // photo2.views = 5

        // const photo3 = new Photo()
        // photo3.description = "For years, Thad Beaumont has been writing books under the pseudonym George Stark. When a journalist threatens to expose Beaumont's pen name, the author decides to go public first, killing off his pseudonym."
        // photo3.filename = "the-dark-half.jpeg"
        // photo3.isPublished = true
        // photo3.name = "The Dark Half"
        // photo3.views = 10

        // // add the photos to the author's photos array:
        // author.photos = [photo1, photo2, photo3]

        // // save the author entity using the repository:
        // console.log("Saved new author and should have connected all related photos to that author!")
        // await authorRepository.save(author)
        // This will save the new author entity along with its related photos in the database, 
        // and the cascade option will ensure that any changes made to the author entity will also be applied to its related photos.

        console.log("Load author with id 2 and all related photos with author...")
        const authorPhotos = await authorRepository.findOne({
            relations: ["photos", "photos.metadataz"],
            where: {
                id: 2 // where the id is of the author. expecting three 3 photos connected to this single author
            }
        })

        console.log(JSON.stringify(authorPhotos, null, 4));

        // const metadata = authorPhotos.photos.map((el) => el.metadataz);
        // console.log(metadata);



    }).catch(error => console.log(error))
