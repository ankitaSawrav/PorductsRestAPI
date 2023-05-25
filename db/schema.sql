DROP TABLE IF EXISTS stock Cascade;
DROP TABLE IF EXISTS product Cascade;
DROP TABLE IF EXISTS category Cascade;
CREATE TABLE category (
    id serial PRIMARY KEY,
    categoryName VARCHAR(255)
);
CREATE TABLE product (
    id serial PRIMARY KEY,
    productName VARCHAR(255) ,
    productDescription VARCHAR(255),
    categoryId integer REFERENCES product(id),
    active boolean
);

CREATE TABLE stock (
    id serial PRIMARY KEY,
    quantity integer,
    productId integer REFERENCES product(id)
);

