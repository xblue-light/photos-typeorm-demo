import * as dotenv from 'dotenv'
dotenv.config()
import { AppDataSource } from "./data-source"
import { Photo } from "./entity/Photo"


// To initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
    .then(async () => {

    // here you can start to work with your database
    // Add some photos
    // console.log("Initialization done! TypeORM is ready!")
    // const photo = new Photo();
    // photo.name = "Me and my Bears";
    // photo.description = "Loreal ipsum koreal koreal koreal";
    // photo.filename = "photo-me-and-my-bears.jpeg";
    // photo.views = 255555
    // photo.isPublished = true;

    // const photo2 = new Photo();
    // photo2.name = "Emerald";
    // photo2.description = "Loreal ipsum koreal koreal koreal";
    // photo2.filename = "emerald.jpeg";
    // photo2.views = 155545
    // photo2.isPublished = false;

    // const photo3 = new Photo();
    // photo3.name = "Saphire";
    // photo3.description = "Loreal ipsum koreal koreal koreal";
    // photo3.filename = "saphire.jpeg";
    // photo3.views = 654122
    // photo3.isPublished = true;

    // await AppDataSource.manager.save(photo)
    // await AppDataSource.manager.save(photo2)
    // await AppDataSource.manager.save(photo3)

    // console.log("The photo has been saved successfully!")

    // Load all our Photo entity using EntityManager
    // const savedPhotos = await AppDataSource.manager.find(Photo);
    // console.log("All photos from the db", savedPhotos);

    // Using Repository instead of EntityManager

    // const photo = new Photo()
    // photo.name = "Graphite"
    // photo.description = "Loreal ipsum loreal koreal ipsum."
    // photo.filename = "graphite-alpha-delta.jpg"
    // photo.views = 25323232
    // photo.isPublished = true

    // const photoRepository = AppDataSource.getRepository(Photo)

    // await photoRepository.save(photo)
    // console.log("Photo has been saved")

    // const savedPhotos = await photoRepository.find()
    // console.log("All photos from the db: ", savedPhotos)


    // Loading from the database 



    }).catch(error => console.log(error))
