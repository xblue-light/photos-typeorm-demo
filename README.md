# Photos Album TypeORM demo
### A simple demo for loading data and using the EntityManager and Repository in TypeORM.



Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm run start:dev` command
4. Have fun!

###  Creating a many-to-one / one-to-many relation

In many-to-one / one-to-many relation, the owner side is always many-to-one. It means that the class that uses @ManyToOne will store the id of the related object.

### Author table
| column | type | key/s |
| ------------ | ------------ | ------------ |
| id  | int(11)  | PRIMARY KEY AUTO_INCREMENT  |
| name  | varchar(255)  |  |

### Photo table
| column | type | key/s |
| ------------ | ------------ | ------------ |
| id  | int(11)  | PRIMARY KEY AUTO_INCREMENT  |
| name  | varchar(255)  |  |
| description  | varchar(255)  |  |
| filename  | varchar(255)  |  |
| isPublished  | boolean  |  |
| authorId  | int(11)  | FOREIGN KEY  |


This displays an author with the id of 2 and the Photo entities which are related to that author.

```json

{
    "id": 1,
    "name": "Stephen King",
    "photos": [
        {
            "id": 1,
            "name": "Children of the Corn",
            "description": "Burt and Vicky are traveling through Nebraska on their way to California on a vacation meant to save their failing marriage.",
            "filename": "children-of-the-corn.jpeg",
            "views": 20,
            "isPublished": true,
            "metadataz": {
                "id": 1,
                "height": 455,
                "width": 355,
                "orientation": "portrait",
                "compressed": true,
                "comment": "JDK"
            }
        },
        {
            "id": 2,
            "name": "The Colorado Kid",
            "description": "Vince Teague and Dave Bowie are the sole operators of The Weekly Islander, a small Maine newspaper. Stephanie McCann has been working for them as an intern.",
            "filename": "the-colorado-kid.jpeg",
            "views": 5,
            "isPublished": true,
            "metadataz": {
                "id": 2,
                "height": 755,
                "width": 375,
                "orientation": "portrait",
                "compressed": true,
                "comment": "KODAK"
            }
        },
        {
            "id": 3,
            "name": "The Dark Half",
            "description": "For years, Thad Beaumont has been writing books under the pseudonym George Stark. When a journalist threatens to expose Beaumont's pen name, the author decides to go public first, killing off his pseudonym.",
            "filename": "the-dark-half.jpeg",
            "views": 10,
            "isPublished": true,
            "metadataz": {
                "id": 3,
                "height": 755,
                "width": 375,
                "orientation": "portrait",
                "compressed": true,
                "comment": "KODAK"
            }
        }
    ]
}


```