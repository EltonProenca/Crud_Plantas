CREATE DATABASE crud_plantas;

USE crud_plantas;
CREATE TABLE alelos_1_1(
    id_ale1 INT(200) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome_ale1 VARCHAR (200),
    valor_ale1 VARCHAR(22)
    
)AUTO_INCREMENT = 1;

CREATE TABLE caracteristica_1_1(
    id_caract1 INT(200) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome_caract VARCHAR (200),
    id_alelos_1_1 INT(250),
    id_alelos_1_2 INT(250),
    id_genotipo_1_1 INT(250),
    id_genotipo_1_2 INT(250),
    CONSTRAINT fk_caract_1_1 FOREIGN KEY (id_alelos_1_1) REFERENCES alelos_1_1 (id_ale1),
    CONSTRAINT fk_caract_1_2 FOREIGN KEY (id_alelos_1_2) REFERENCES alelos_1_1 (id_ale1),
    CONSTRAINT fk_caract_1_3 FOREIGN KEY (id_genotipo_1_1) REFERENCES alelos_1_1 (id_ale1),
    CONSTRAINT fk_caract_1_4 FOREIGN KEY (id_genotipo_1_2) REFERENCES alelos_1_1 (id_ale1)
    
    
)AUTO_INCREMENT = 1;



CREATE TABLE plantas(
    id_planta INT(200) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome_planta VARCHAR (200),
    id_caracteristica_1_1 INT(250),
    id_ale1_1 INT(250),
    id_ale2_1 INT(250),
    id_gene1_1 INT(250),
    id_gene2_1 INT(250),
    id_caracteristica_1_2 INT(250),
    id_ale1_2 INT(250),
    id_ale2_2 INT(250),
    id_gene1_2 INT(250),
    id_gene2_2 INT(250),
    id_caracteristica_1_3 INT(250),
    id_ale1_3 INT(250),
    id_ale2_3 INT(250),
    id_gene1_3 INT(250),
    id_gene2_3 INT(250),
    id_caracteristica_1_4 INT(250),
    id_ale1_4 INT(250),
    id_ale2_4 INT(250),
    id_gene1_4 INT(250),
    id_gene2_4 INT(250),
    id_caracteristica_1_5 INT(250),
    id_ale1_5 INT(250),
    id_ale2_5 INT(250),
    id_gene1_5 INT(250),
    id_gene2_5 INT(250),
    id_caracteristica_1_6 INT(250),
    id_ale1_6 INT(250),
    id_ale2_6 INT(250),
    id_gene1_6 INT(250),
    id_gene2_6 INT(250),
    id_caracteristica_1_7 INT(250),
    id_ale1_7 INT(250),
    id_ale2_7 INT(250),
    id_gene1_7 INT(250),
    id_gene2_7 INT(250),
    CONSTRAINT fk_plantas1 FOREIGN KEY (id_caracteristica_1_1) REFERENCES caracteristica_1_1 (id_caract1),
    CONSTRAINT fk_plantas2 FOREIGN KEY (id_ale1_1) REFERENCES caracteristica_1_1 (id_alelos_1_1),
    CONSTRAINT fk_plantas3 FOREIGN KEY (id_ale2_1) REFERENCES caracteristica_1_1 (id_alelos_1_2),
    CONSTRAINT fk_plantas4 FOREIGN KEY (id_gene1_1) REFERENCES alelos_1_1  (id_ale1),
    CONSTRAINT fk_plantas5 FOREIGN KEY (id_gene2_1) REFERENCES alelos_1_1  (id_ale1),
    CONSTRAINT fk_plantas6 FOREIGN KEY (id_caracteristica_1_2) REFERENCES caracteristica_1_1 (id_caract1),
    CONSTRAINT fk_plantas7 FOREIGN KEY (id_ale1_2) REFERENCES caracteristica_1_1 (id_alelos_1_1),
    CONSTRAINT fk_plantas8 FOREIGN KEY (id_ale2_2) REFERENCES caracteristica_1_1 (id_alelos_1_2),
    CONSTRAINT fk_plantas9 FOREIGN KEY (id_gene1_2) REFERENCES alelos_1_1  (id_ale1),
    CONSTRAINT fk_plantas10 FOREIGN KEY (id_gene2_2) REFERENCES alelos_1_1  (id_ale1),
    CONSTRAINT fk_plantas11 FOREIGN KEY (id_caracteristica_1_3) REFERENCES caracteristica_1_1 (id_caract1),
    CONSTRAINT fk_plantas12 FOREIGN KEY (id_ale1_3) REFERENCES caracteristica_1_1 (id_alelos_1_1),
    CONSTRAINT fk_plantas13 FOREIGN KEY (id_ale2_3) REFERENCES caracteristica_1_1 (id_alelos_1_2),
    CONSTRAINT fk_plantas14 FOREIGN KEY (id_gene1_3) REFERENCES alelos_1_1  (id_ale1),
    CONSTRAINT fk_plantas15 FOREIGN KEY (id_gene2_3) REFERENCES alelos_1_1  (id_ale1),
    CONSTRAINT fk_plantas16 FOREIGN KEY (id_caracteristica_1_4) REFERENCES caracteristica_1_1 (id_caract1),
    CONSTRAINT fk_plantas17 FOREIGN KEY (id_ale1_4) REFERENCES caracteristica_1_1 (id_alelos_1_1),
    CONSTRAINT fk_plantas18 FOREIGN KEY (id_ale2_4) REFERENCES caracteristica_1_1 (id_alelos_1_2),
    CONSTRAINT fk_plantas19 FOREIGN KEY (id_gene1_4) REFERENCES alelos_1_1  (id_ale1),
    CONSTRAINT fk_plantas20 FOREIGN KEY (id_gene2_4) REFERENCES alelos_1_1  (id_ale1),
    CONSTRAINT fk_plantas21 FOREIGN KEY (id_caracteristica_1_5) REFERENCES caracteristica_1_1 (id_caract1),
    CONSTRAINT fk_plantas22 FOREIGN KEY (id_ale1_5) REFERENCES caracteristica_1_1 (id_alelos_1_1),
    CONSTRAINT fk_plantas23 FOREIGN KEY (id_ale2_5) REFERENCES caracteristica_1_1 (id_alelos_1_2),
    CONSTRAINT fk_plantas24 FOREIGN KEY (id_gene1_5) REFERENCES alelos_1_1  (id_ale1),
    CONSTRAINT fk_plantas25 FOREIGN KEY (id_gene2_5) REFERENCES alelos_1_1  (id_ale1),
    CONSTRAINT fk_plantas26 FOREIGN KEY (id_caracteristica_1_6) REFERENCES caracteristica_1_1 (id_caract1),
    CONSTRAINT fk_plantas27 FOREIGN KEY (id_ale1_6) REFERENCES caracteristica_1_1 (id_alelos_1_1),
    CONSTRAINT fk_plantas28 FOREIGN KEY (id_ale2_6) REFERENCES caracteristica_1_1 (id_alelos_1_2),
    CONSTRAINT fk_plantas29 FOREIGN KEY (id_gene1_6) REFERENCES alelos_1_1  (id_ale1),
    CONSTRAINT fk_plantas30 FOREIGN KEY (id_gene2_6) REFERENCES alelos_1_1  (id_ale1),
    CONSTRAINT fk_plantas31 FOREIGN KEY (id_caracteristica_1_7) REFERENCES caracteristica_1_1 (id_caract1),
    CONSTRAINT fk_plantas32 FOREIGN KEY (id_ale1_7) REFERENCES caracteristica_1_1 (id_alelos_1_1),
    CONSTRAINT fk_plantas33 FOREIGN KEY (id_ale2_7) REFERENCES caracteristica_1_1 (id_alelos_1_2),
    CONSTRAINT fk_plantas34 FOREIGN KEY (id_gene1_7) REFERENCES alelos_1_1  (id_ale1),
    CONSTRAINT fk_plantas35 FOREIGN KEY (id_gene2_7) REFERENCES alelos_1_1  (id_ale1),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)AUTO_INCREMENT = 1;
DESCRIBE plantas;