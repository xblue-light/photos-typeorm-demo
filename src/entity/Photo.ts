import { Column, Entity, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
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

    @OneToOne(() => PhotoMetadata, (photoMetadata) => photoMetadata.photo)
    metadataz: PhotoMetadata
}