CREATE TABLE pet
(
  id INT NOT NULL AUTO_INCREMENT,
  owner_id INT NOT NULL,
  nickname VARCHAR(255),
  breed VARCHAR(255),
  PRIMARY KEY (id),
  FOREIGN KEY (owner_id) REFERENCES person(id)
);
