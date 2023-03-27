import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
} from "typeorm"
import { Photo } from "./Photo";

@Entity()
export class PhotoMetadata {
    @PrimaryGeneratedColumn()
    id: number

    @Column("int")
    height: number

    @Column("int")
    width: number

    @Column()
    orientation: string

    @Column()
    compressed: boolean

    @Column()
    comment: string
    
    // Here we add an inverse side of the relationship and make relations between PhotoMetadata and Photo bidirectional.
    // @OneToOne(
        //     type => Photo, 
        //     (photo) => photo.metadata,
        //     { onDelete: "CASCADE" }
        // )
    @OneToOne(() => Photo)
    @JoinColumn() // Using @JoinColumn decorator is required on the owner side of the relationship. The owning side contains a column with the foreign key.
    photo: Photo
}