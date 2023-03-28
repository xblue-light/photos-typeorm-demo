import { 
    Column, 
    Entity, 
    ManyToMany, 
    PrimaryGeneratedColumn 
} from "typeorm";
import { Album } from "./Album";

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

    @ManyToMany(() => Album, (album) => album.photos)
    albums: Album[];
}