import { 
    Column, 
    Entity, 
    ManyToOne, 
    OneToOne, 
    PrimaryGeneratedColumn 
} from "typeorm";
import { Author } from "./Author.entity";
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
    metadataz?: PhotoMetadata

    // In many-to-one / one-to-many relation, the owner side is always many-to-one. 
    // It means that the class that uses @ManyToOne will store the id of the related object.
    @ManyToOne(() => Author, (author) => author.photos)
    author: Author
}