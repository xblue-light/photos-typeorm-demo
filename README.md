# Photos Album TypeORM demo
### A simple demo for loading data and using the EntityManager and Repository in TypeORM.

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm run start:dev` command


### Creating a one-to-one relation

The newly generated table based on our entities will contain a column with a foreign key for the photo relation

| photo_metadata |  | | 
|--|--|--|
| **column** | **type** | **key/s** |
|--|--|--|
| id | int(11) | **PRIMARY KEY AUTO_INCREMENT** |	
| height | int(11) | |	
| width | int(11) | |	
| comment | varchar(255) | |	
| compressed | boolean | |	
| orientation | varchar(255) | |	
| photoId | int(11) | **FOREIGN KEY** |	