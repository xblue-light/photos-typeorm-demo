import * as dotenv from 'dotenv'
dotenv.config()
import { AppDataSource } from "./data-source"
import { Album } from './entity/Album'
import { Photo } from "./entity/Photo"

// To initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
    .then(async () => {

        const photoRepository = AppDataSource.getRepository(Photo);
        const albumRepository = AppDataSource.getRepository(Album);

        // new album
        // const albumTravelling = new Album();
        // albumTravelling.name = "Travelling";
        
        // // save the album
        // console.log("Saving new album 1...")
        // await albumRepository.save(albumTravelling);
        
        // // new album
        // const albumAustralia = new Album();
        // albumAustralia.name = "Australia";

        // // save the album
        // console.log("Saving new album 2...")
        // await albumRepository.save(albumAustralia);

        // const photo1 = new Photo();
        // photo1.description = "A wonderful sunny day walking around the Sydney Opera";
        // photo1.filename = "sydney-australia-2015.jpg";
        // photo1.isPublished = true;
        // photo1.name = "Sydney, Australia";
        // photo1.views = 45555;

        // // connect 2 albums to this photo
        // photo1.albums = [albumTravelling, albumAustralia]; 

        // // save the new photo
        // console.log("Saving new photo 1...")
        // await photoRepository.save(photo1);

        // const photo2 = new Photo();
        // photo2.description = "A walk in the park on a rainy day in Adelaide, SA";
        // photo2.filename = "adelaide-australia-2015.jpg";
        // photo2.isPublished = true;
        // photo2.name = "Adelaide, Australia";
        // photo2.views = 24555;

        // // connect the same 2 albums to another photo
        // photo2.albums = [albumTravelling, albumAustralia];
        
        // // save the new photo
        // console.log("Saving new photo 2...")
        // await photoRepository.save(photo2);

        // =============================================

        // now our photo is saved and albums are attached to it
        // now lets load them:

        // where id here is referring to the id of the photo
        // const loadedPhoto = await photoRepository.findOne({
        //     where: {
        //         id: 4
        //     },
        //     relations: {
        //         albums: true
        //     }
        // })

        // where id here is referring to the id of the photo
        // const loadedPhoto2 = await photoRepository.findOne({
        //     where: {
        //         id: 5
        //     },
        //     relations: {
        //         albums: true
        //     }
        // })

        // console.log(loadedPhoto);
        // console.log(loadedPhoto2);

        // Load all the photos and their relations i.e albums property
        console.log("All photos and their associated albums.");
        const allPhotos = await photoRepository.find({ relations: ["albums"] });
        console.log(JSON.stringify(allPhotos, null, 4))

        // Load all the albums and the photos that are attached to each album
        const allAlbums = await albumRepository.find({ relations: ["photos"] });
        console.log("All albums and their associated photos.");
        console.log(JSON.stringify(allAlbums, null, 2));



    }).catch(error => console.log(error))
