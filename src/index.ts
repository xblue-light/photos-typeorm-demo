import * as dotenv from 'dotenv'
dotenv.config()
import { AppDataSource } from "./data-source"
import { Photo } from "./entity/Photo"
import { PhotoMetadata } from './entity/PhotoMetadata.entity'

// To initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
    .then(async () => {

        // get entity repositories
        const photoRepository = AppDataSource.getRepository(Photo);
        const metadataRepository = AppDataSource.getRepository(PhotoMetadata)


        // Here you can start to work with your database
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

        // ====================================================

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

        // ====================================================

        // Loading from the database 
        // const allPhotos = await photoRepository.find()
        // console.log("All photos from the db: ", allPhotos)

        // const firstPhoto = await photoRepository.findOneBy({
        //     id: 4,
        // })
        // console.log("Third photo from the db: ", firstPhoto)

        // const emeraldPhoto = await photoRepository.findOneBy({
        //     name: "Saphire",
        // })

        // console.log("Saphire photo from the db: ", emeraldPhoto)

        // const allViewedPhotos = await photoRepository.findBy({ views: 25323232 })
        // console.log("All viewed photos: ", allViewedPhotos)

        // const allPublishedPhotos = await photoRepository.findBy({ isPublished: true })
        // console.log("All published photos: ", allPublishedPhotos)

        // const [photos, photosCount] = await photoRepository.findAndCount()
        // console.log("All photos: ", photos)
        // console.log("Photos count: ", photosCount)

        // ====================================================

        // Updating the database
        // const photoToUpdate = await photoRepository.findOneBy({
        //     id: 2,
        // });

        // photoToUpdate.name = "I love polar bears!";
        // photoToUpdate.isPublished = false;
        // photoToUpdate.views = 255557;
        // photoToUpdate.filename = "polar-bears-dancing.jpeg";

        // Now photo with id = 2 will be updated in the database.

        // console.log("Updated photo details successfully!");
        // await photoRepository.save(photoToUpdate);

        // ====================================================

        //# Removing from the database
        // const photoToRemove = await photoRepository.findOneBy({
        //     id: 2,
        // })
        // console.log("Removing photo with id: 2");
        // await photoRepository.remove(photoToRemove)

        // # Creating a one-to-one relation and saving a one-to-one relation

        // create a photo
        const photo1 = new Photo()
        photo1.name = "Sydney, Australia 2015"
        photo1.description = "A beautiful view of the Sydney Opera House"
        photo1.filename = "sydney-opera-01.jpg"
        photo1.views = 245
        photo1.isPublished = true

        const metadata = new PhotoMetadata()
        metadata.comment = "High fidelity picture"
        metadata.height = 1200
        metadata.width = 2400
        metadata.compressed = false
        metadata.orientation = "landscape"

        metadata.photo = photo1 // this way we connect the two entities 

        
        // first we should save a photo
        await photoRepository.save(photo1)
        
        // next save a photo metadata
        await metadataRepository.save(metadata)

        console.log("Metadata is saved, and the relation between metadata and photo is created in the database too")



    }).catch(error => console.log(error))
