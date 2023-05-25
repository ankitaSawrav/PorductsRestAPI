INSERT INTO category (categoryName) VALUES ('clothing');
INSERT INTO category (categoryName ) VALUES ('shoes');

INSERT INTO product (productName,productDescription,categoryId,active) VALUES ('shirt','lkdsjfsdfdsf','1',true);
INSERT INTO product (productName,productDescription,categoryId,active) VALUES ('long sleeves shirt','long sleeves','1',true);
INSERT INTO product (productName,productDescription,categoryId,active) VALUES ('short sleeves shirt','short sleeves','1',true);
INSERT INTO product (productName,productDescription,categoryId,active) VALUES ('nike soes','nike shoes','2',true);


-- stock (
   
   INSERT INTO stock ( quantity,productId ) VALUES ('10','2');
   INSERT INTO stock ( quantity,productId ) VALUES ('2','1');
   INSERT INTO stock ( quantity,productId ) VALUES ('10','3');


