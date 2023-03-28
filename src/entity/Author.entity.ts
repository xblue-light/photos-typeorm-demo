import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
} from "typeorm"
import { Photo } from "./Photo"

// Let's create a many-to-one/one-to-many relation. 
// Let's say a Photo has ONE Author, and EACH Author can have MANY photos. [many photos -> 1 author], [1 author -> many photos]
// First, let's create an Author class:

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    // Author contains an inverse side of a relation. 
    // OneToMany is always an inverse side of the relation, and it can't exist without ManyToOne on the other side of the relation.
    @OneToMany(
        () => Photo, 
        (photo) => photo.author, 
        { 
            cascade: true 
        }
    ) // note: we will create author property in the Photo class below
    photos: Photo[]
}