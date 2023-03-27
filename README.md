# Photos Album TypeORM demo
### A simple demo for loading data and using the EntityManager and Repository in TypeORM.



Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm run start:dev` command
4. Have fun!

###  Creating a many-to-one / one-to-many relation

In many-to-one / one-to-many relation, the owner side is always many-to-one. It means that the class that uses @ManyToOne will store the id of the related object.

+-------------+--------------+----------------------------+
|                          author                         |
+-------------+--------------+----------------------------+
| id          | int(11)      | PRIMARY KEY AUTO_INCREMENT |
| name        | varchar(255) |                            |
+-------------+--------------+----------------------------+

The photo table, should have a new author column and creating a foreign key for it:

+-------------+--------------+----------------------------+
|                         photo                           |
+-------------+--------------+----------------------------+
| id          | int(11)      | PRIMARY KEY AUTO_INCREMENT |
| name        | varchar(255) |                            |
| description | varchar(255) |                            |
| filename    | varchar(255) |                            |
| isPublished | boolean      |                            |
| authorId    | int(11)      | FOREIGN KEY                |
+-------------+--------------+----------------------------+



