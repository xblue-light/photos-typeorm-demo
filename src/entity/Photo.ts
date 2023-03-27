import { 
    Column, 
    Entity, 
    OneToOne, 
    PrimaryGeneratedColumn 
} from "typeorm";
import { PhotoMetadata } from "./PhotoMetadata.entity";

@Entity()
export class Photo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
    })
    name: string;

    @Column("text")
    description: string;

    @Column()
    filename: string;

    @Column()
    views: number;

    @Column()
    isPublished: boolean;

    @OneToOne(
        type => PhotoMetadata, 
        (photoMetadata) => photoMetadata.photo, 
        // Using cascade allows us not to separately save photo and separately save metadata objects now. 
        // Now we can simply save a photo object, and the metadata object will be saved automatically because of cascade options.
        // Example can be compared from index.ts @ line 144 VS line 211
        { cascade: true, }
    )
    metadataz: PhotoMetadata
}