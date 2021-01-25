import { Request, Response } from 'express';
import pool from '../database'

class PlantasController {

    public async list(req: Request, res: Response): Promise<void> {
     // const plantas = await pool.query('SELECT * FROM plantas,caracteristica_1_1, caracteristica_1_2, alelos_1_1, alelos_1_2, genotipo_1_1, genotipo_1_2 WHERE plantas.id_caracteristica_1_1 = caracteristica_1_1.id AND caracteristica_1_1.id_caracteristica_1_2 = caracteristica_1_2.id AND caracteristica_1_2.id_alelos_1_1 = alelos_1_1.id AND caracteristica_1_2.id_alelos_1_2 = alelos_1_2.id AND caracteristica_1_2.id_genotipo_1_1 = genotipo_1_1.id AND caracteristica_1_2.id_genotipo_1_2 = genotipo_1_2.id');
     const plantas = await pool.query('SELECT plant.created_at, plant.id_planta AS id_planta, plant.nome_planta AS nome_planta, plant.id_caracteristica_1_1 AS id_caracteristica_1_1,'
     +' plant.id_caracteristica_1_2 AS id_caracteristica_1_2, plant.id_caracteristica_1_3 AS id_caracteristica_1_3, plant.id_caracteristica_1_4 AS id_caracteristica_1_4, '
     +'plant.id_caracteristica_1_5 AS id_caracteristica_1_5, plant.id_caracteristica_1_6 AS id_caracteristica_1_6, plant.id_caracteristica_1_7 AS id_caracteristica_1_7, '
     +'plant.id_ale1_1 as id_ale1_1, plant.id_ale2_1 AS id_ale2_1, plant.id_ale1_2 AS id_ale1_2, plant.id_ale2_2 AS id_ale2_2, plant.id_ale1_3 AS id_ale1_3, '
     +'plant.id_ale2_3 AS id_ale2_3, plant.id_ale1_4 AS id_ale1_4, plant.id_ale2_4 AS id_ale2_4, plant.id_ale1_5 AS id_ale1_5, plant.id_ale2_5 AS id_ale2_5,'
     +'plant.id_ale1_6 AS id_ale1_6, plant.id_ale2_6 AS id_ale2_6, plant.id_ale1_7 AS id_ale1_7, plant.id_ale2_7 AS id_ale2_7, plant.id_gene1_1 AS id_gene1_1, '
     +'plant.id_gene2_1 AS id_gene2_1, plant.id_gene1_2 AS id_gene1_2, plant.id_gene2_2 AS id_gene2_2, plant.id_gene1_3 AS id_gene1_3, plant.id_gene2_3 AS id_gene2_3, '
     +'plant.id_gene1_4 AS id_gene1_4, plant.id_gene2_4 AS id_gene2_4, plant.id_gene1_5 AS id_gene1_5, plant.id_gene2_5 AS id_gene2_5, plant.id_gene1_6 AS id_gene1_6, '
     +'plant.id_gene2_6 AS id_gene2_6, plant.id_gene1_7 AS id_gene1_7, plant.id_gene2_7 AS id_gene2_7, caract.id_caract1 AS caracteristica_1_1_1_id, '
     +'caract.nome_caract AS caracteristica_1_1_1_nome, caract2.nome_caract AS caracteristica_1_1_2_nome, caract3.nome_caract AS caracteristica_1_1_3_nome, '
     +'caract4.nome_caract AS caracteristica_1_1_4_nome, caract5.nome_caract AS caracteristica_1_1_5_nome, caract6.nome_caract AS caracteristica_1_1_6_nome, '
     +'caract7.nome_caract AS caracteristica_1_1_7_nome, caract.id_alelos_1_1 AS caracteristica_1_1_1_ale1, caract.id_alelos_1_2 AS caracteristica_1_1_1_ale2, '
     +'caract.id_alelos_1_1 AS caracteristica_1_1_2_ale1, caract.id_alelos_1_2 AS caracteristica_1_1_2_ale2, caract.id_genotipo_1_1 AS caracteristica_1_1_1_gene1, '
     +'caract.id_genotipo_1_2 AS caracteristica_1_1_1_gene2, caract.id_genotipo_1_1 AS caracteristica_1_1_2_gene1, caract.id_genotipo_1_2 AS caracteristica_1_1_2_gene2, '
     +'al1_1.id_ale1 AS alelo_1_1_1_id, al1_1.nome_ale1 AS alelo_1_1_1_nome, al1_1.valor_ale1 AS alelo_1_1_1_valor, al2_1.id_ale1 AS alelo_1_1_1_id_2, al2_1.nome_ale1 AS alelo_1_1_1_nome_2, '
     +'al2_1.valor_ale1 AS alelo_1_1_1_valor2, al1_2.id_ale1 AS alelo_1_1_2_id, al1_2.nome_ale1 AS alelo_1_1_2_nome, al1_2.valor_ale1 AS alelo_1_1_2_valor, al2_2.id_ale1 AS alelo_1_1_2_id_2, '
     +'al2_2.nome_ale1 AS alelo_1_1_2_nome_2, al2_2.valor_ale1 AS alelo_1_1_2_valor2, al1_3.id_ale1 AS alelo_1_1_3_id, al1_3.nome_ale1 AS alelo_1_1_3_nome, al1_3.valor_ale1 AS alelo_1_1_3_valor, '
     +'al2_3.id_ale1 AS alelo_1_1_3_id_2, al2_3.nome_ale1 AS alelo_1_1_3_nome_2, al2_3.valor_ale1 AS alelo_1_1_3_valor2, al1_4.id_ale1 AS alelo_1_1_4_id, al1_4.nome_ale1 AS alelo_1_1_4_nome, '
     +'al1_4.valor_ale1 AS alelo_1_1_4_valor, al2_4.id_ale1 AS alelo_1_1_4_id_2, al2_4.nome_ale1 AS alelo_1_1_4_nome_2, al2_4.valor_ale1 AS alelo_1_1_4_valor2, al1_5.id_ale1 AS alelo_1_1_5_id, '
     +'al1_5.nome_ale1 AS alelo_1_1_5_nome, al1_5.valor_ale1 AS alelo_1_1_5_valor, al2_5.id_ale1 AS alelo_1_1_5_id_2, al2_5.nome_ale1 AS alelo_1_1_5_nome_2, al2_5.valor_ale1 AS alelo_1_1_5_valor2, '
     +'al1_6.id_ale1 AS alelo_1_1_6_id, al1_6.nome_ale1 AS alelo_1_1_6_nome, al1_6.valor_ale1 AS alelo_1_1_6_valor, al2_6.id_ale1 AS alelo_1_1_6_id_2, al2_6.nome_ale1 AS alelo_1_1_6_nome_2, '
     +'al2_6.valor_ale1 AS alelo_1_1_6_valor2, al1_7.id_ale1 AS alelo_1_1_7_id, al1_7.nome_ale1 AS alelo_1_1_7_nome, al1_7.valor_ale1 AS alelo_1_1_7_valor, '
     +'al2_7.id_ale1 AS alelo_1_1_7_id_2, al2_7.nome_ale1 AS alelo_1_1_7_nome_2, al2_7.valor_ale1 AS alelo_1_1_7_valor2, gene1_1.id_ale1 AS gene_1_1_1_id, gene1_1.nome_ale1 AS gene_1_1_1_nome, '
     +'gene1_1.valor_ale1 AS gene_1_1_1_valor, gene2_1.id_ale1 AS gene_1_1_1_id_2, gene2_1.nome_ale1 AS gene_1_1_1_nome_2, gene2_1.valor_ale1 AS gene_1_1_1_valor2, '
     +'gene1_2.id_ale1 AS gene_1_1_2_id, gene1_2.nome_ale1 AS gene_1_1_2_nome, gene1_2.valor_ale1 AS gene_1_1_2_valor, gene2_2.id_ale1 AS gene_1_1_2_id_2, gene2_2.nome_ale1 AS gene_1_1_2_nome_2,'
     +' gene2_2.valor_ale1 AS gene_1_1_2_valor2, gene1_3.id_ale1 AS gene_1_1_3_id, gene1_3.nome_ale1 AS gene_1_1_3_nome, gene1_3.valor_ale1 AS gene_1_1_3_valor, gene2_3.id_ale1 AS gene_1_1_3_id_2, '
     +'gene2_3.nome_ale1 AS gene_1_1_3_nome_2, gene2_3.valor_ale1 AS gene_1_1_3_valor2, gene1_4.id_ale1 AS gene_1_1_4_id, gene1_4.nome_ale1 AS gene_1_1_4_nome, '
     +'gene1_4.valor_ale1 AS gene_1_1_4_valor, gene2_4.id_ale1 AS gene_1_1_4_id_2, gene2_4.nome_ale1 AS gene_1_1_4_nome_2, gene2_4.valor_ale1 AS gene_1_1_4_valor2, '
     +'gene1_5.id_ale1 AS gene_1_1_5_id, gene1_5.nome_ale1 AS gene_1_1_5_nome, gene1_5.valor_ale1 AS gene_1_1_5_valor, gene2_5.id_ale1 AS gene_1_1_5_id_2, gene2_5.nome_ale1 AS gene_1_1_5_nome_2, '
     +'gene2_5.valor_ale1 AS gene_1_1_5_valor2, gene1_6.id_ale1 AS gene_1_1_6_id, gene1_6.nome_ale1 AS gene_1_1_6_nome, gene1_6.valor_ale1 AS gene_1_1_6_valor, gene2_6.id_ale1 AS gene_1_1_6_id_2, '
     +'gene2_6.nome_ale1 AS gene_1_1_6_nome_2, gene2_6.valor_ale1 AS gene_1_1_6_valor2, gene1_7.id_ale1 AS gene_1_1_7_id, gene1_7.nome_ale1 AS gene_1_1_7_nome, '
     +'gene1_7.valor_ale1 AS gene_1_1_7_valor, gene2_7.id_ale1 AS gene_1_1_7_id_2, gene2_7.nome_ale1 AS gene_1_1_7_nome_2, gene2_7.valor_ale1 AS gene_1_1_7_valor2 '
     +'FROM caracteristica_1_1 caract '
     +'LEFT JOIN plantas AS plant ON caract.id_caract1= plant.id_caracteristica_1_1 '
     +'LEFT JOIN caracteristica_1_1 AS caract2 ON plant.id_caracteristica_1_2 = caract2.id_caract1 '
     +'LEFT JOIN caracteristica_1_1 AS caract3 ON plant.id_caracteristica_1_3 = caract3.id_caract1 '
     +'LEFT JOIN caracteristica_1_1 AS caract4 ON plant.id_caracteristica_1_4 = caract4.id_caract1 '
     +'LEFT JOIN caracteristica_1_1 AS caract5 ON plant.id_caracteristica_1_5 = caract5.id_caract1 '
     +'LEFT JOIN caracteristica_1_1 AS caract6 ON plant.id_caracteristica_1_6 = caract6.id_caract1 '
     +'LEFT JOIN caracteristica_1_1 AS caract7 ON plant.id_caracteristica_1_7 = caract7.id_caract1 '
     +'RIGHT JOIN alelos_1_1 AS al1_1 ON plant.id_ale1_1 = al1_1.id_ale1 '
     +'RIGHT JOIN alelos_1_1 AS al2_1 ON plant.id_ale2_1 = al2_1.id_ale1 '
     +'RIGHT JOIN alelos_1_1 AS al1_2 ON plant.id_ale1_2 = al1_2.id_ale1 '
     +'RIGHT JOIN alelos_1_1 AS al2_2 ON plant.id_ale2_2 = al2_2.id_ale1 '
     +'RIGHT JOIN alelos_1_1 AS al1_3 ON plant.id_ale1_3 = al1_3.id_ale1 '
     +'RIGHT JOIN alelos_1_1 AS al2_3 ON plant.id_ale2_3 = al2_3.id_ale1 '
     +'RIGHT JOIN alelos_1_1 AS al1_4 ON plant.id_ale1_4 = al1_4.id_ale1 '
     +'RIGHT JOIN alelos_1_1 AS al2_4 ON plant.id_ale2_4 = al2_4.id_ale1 '
     +'RIGHT JOIN alelos_1_1 AS al1_5 ON plant.id_ale1_5 = al1_5.id_ale1 '
     +'RIGHT JOIN alelos_1_1 AS al2_5 ON plant.id_ale2_5 = al2_5.id_ale1 '
     +'RIGHT JOIN alelos_1_1 AS al1_6 ON plant.id_ale1_6 = al1_6.id_ale1 '
     +'RIGHT JOIN alelos_1_1 AS al2_6 ON plant.id_ale2_6 = al2_6.id_ale1 '
     +'RIGHT JOIN alelos_1_1 AS al1_7 ON plant.id_ale1_7 = al1_7.id_ale1 '
     +'RIGHT JOIN alelos_1_1 AS al2_7 ON plant.id_ale2_7 = al2_7.id_ale1 '
     +'RIGHT JOIN alelos_1_1 AS gene1_1 ON plant.id_gene1_1 = gene1_1.id_ale1 '
     +'RIGHT JOIN alelos_1_1 AS gene2_1 ON plant.id_gene2_1 = gene2_1.id_ale1 '
     +'RIGHT JOIN alelos_1_1 AS gene1_2 ON plant.id_gene1_2 = gene1_2.id_ale1  '
     +'RIGHT JOIN alelos_1_1 AS gene2_2 ON plant.id_gene2_2 = gene2_2.id_ale1 '
     +'RIGHT JOIN alelos_1_1 AS gene1_3 ON plant.id_gene1_3 = gene1_3.id_ale1  '
     +'RIGHT JOIN alelos_1_1 AS gene2_3 ON plant.id_gene2_3 = gene2_3.id_ale1 '
     +'RIGHT JOIN alelos_1_1 AS gene1_4 ON plant.id_gene1_4 = gene1_4.id_ale1  '
     +'RIGHT JOIN alelos_1_1 AS gene2_4 ON plant.id_gene2_4 = gene2_4.id_ale1 '
     +'RIGHT JOIN alelos_1_1 AS gene1_5 ON plant.id_gene1_5 = gene1_5.id_ale1  '
     +'RIGHT JOIN alelos_1_1 AS gene2_5 ON plant.id_gene2_5 = gene2_5.id_ale1 '
     +'RIGHT JOIN alelos_1_1 AS gene1_6 ON plant.id_gene1_6 = gene1_6.id_ale1  '
     +'RIGHT JOIN alelos_1_1 AS gene2_6 ON plant.id_gene2_6 = gene2_6.id_ale1 '
     +'RIGHT JOIN alelos_1_1 AS gene1_7 ON plant.id_gene1_7 = gene1_7.id_ale1  '
     +'RIGHT JOIN alelos_1_1 AS gene2_7 ON plant.id_gene2_7 = gene2_7.id_ale1 '
     +'WHERE caract.id_alelos_1_1 > 0 OR caract.id_alelos_1_2 > 0 ORDER BY alelo_1_1_2_id;');
     res.json(plantas);
     console.log(plantas);
      res.json('listando as plantas');
    }

    public async listAlelos1(req: Request, res: Response): Promise<void> {     
        const plantas = await pool.query('SELECT * FROM alelos_1_1');
        res.json(plantas);
        res.json('listando as alelos 1');
    }
    public async listAleloscaract_1(req: Request, res: Response): Promise<void> {     
        const plantas = await pool.query('SELECT caract.*, al1.id_ale1 AS alelo_1_1_id, al1.nome_ale1 AS alelo_1_1_nome, '
        +'al1.valor_ale1 AS alelo_1_1_valor, al2.id_ale1 AS alelo_1_1_id_2, al2.nome_ale1 AS alelo_1_1_nome_2, '
        +'al2.valor_ale1 AS alelo_1_1_valor2 FROM caracteristica_1_1 caract '
        +'INNER JOIN alelos_1_1 AS al1 ON caract.id_alelos_1_1 = al1.id_ale1 '
        +'INNER JOIN alelos_1_1 AS al2 ON caract.id_alelos_1_2 = al2.id_ale1 '
        +'WHERE caract.id_alelos_1_1 = 1 OR caract.id_alelos_1_2 = 2 ORDER BY alelo_1_1_id;');
        res.json(plantas);
        res.json('listando as alelos 1');
    }
    public async listAleloscaract_2(req: Request, res: Response): Promise<void> {     
        const plantas = await pool.query('SELECT caract.*, al1.id_ale1 AS alelo_1_1_id, al1.nome_ale1 AS alelo_1_1_nome, '
        +'al1.valor_ale1 AS alelo_1_1_valor, al2.id_ale1 AS alelo_1_1_id_2, al2.nome_ale1 AS alelo_1_1_nome_2, '
        +'al2.valor_ale1 AS alelo_1_1_valor2 FROM caracteristica_1_1 caract '
        +'INNER JOIN alelos_1_1 AS al1 ON caract.id_alelos_1_1 = al1.id_ale1 '
        +'INNER JOIN alelos_1_1 AS al2 ON caract.id_alelos_1_2 = al2.id_ale1 '
        +'WHERE caract.id_alelos_1_1 = 3 OR caract.id_alelos_1_2 = 4 ORDER BY alelo_1_1_id;');
        res.json(plantas);
        res.json('listando as alelos 1');
    }
    public async listAleloscaract_3(req: Request, res: Response): Promise<void> {     
        const plantas = await pool.query('SELECT caract.*, al1.id_ale1 AS alelo_1_1_id, al1.nome_ale1 AS alelo_1_1_nome, '
        +'al1.valor_ale1 AS alelo_1_1_valor, al2.id_ale1 AS alelo_1_1_id_2, al2.nome_ale1 AS alelo_1_1_nome_2, '
        +'al2.valor_ale1 AS alelo_1_1_valor2 FROM caracteristica_1_1 caract '
        +'INNER JOIN alelos_1_1 AS al1 ON caract.id_alelos_1_1 = al1.id_ale1 '
        +'INNER JOIN alelos_1_1 AS al2 ON caract.id_alelos_1_2 = al2.id_ale1 '
        +'WHERE caract.id_alelos_1_1 = 5 OR caract.id_alelos_1_2 = 6 ORDER BY alelo_1_1_id;');
        res.json(plantas);
        res.json('listando as alelos 1');
    }
    public async listAleloscaract_4(req: Request, res: Response): Promise<void> {     
        const plantas = await pool.query('SELECT caract.*, al1.id_ale1 AS alelo_1_1_id, al1.nome_ale1 AS alelo_1_1_nome, '
        +'al1.valor_ale1 AS alelo_1_1_valor, al2.id_ale1 AS alelo_1_1_id_2, al2.nome_ale1 AS alelo_1_1_nome_2, '
        +'al2.valor_ale1 AS alelo_1_1_valor2 FROM caracteristica_1_1 caract '
        +'INNER JOIN alelos_1_1 AS al1 ON caract.id_alelos_1_1 = al1.id_ale1 '
        +'INNER JOIN alelos_1_1 AS al2 ON caract.id_alelos_1_2 = al2.id_ale1 '
        +'WHERE caract.id_alelos_1_1 = 7 OR caract.id_alelos_1_2 = 8 ORDER BY alelo_1_1_id;');
        res.json(plantas);
        res.json('listando as alelos 1');
    }
    public async listAleloscaract_5(req: Request, res: Response): Promise<void> {     
        const plantas = await pool.query('SELECT caract.*, al1.id_ale1 AS alelo_1_1_id, al1.nome_ale1 AS alelo_1_1_nome, '
        +'al1.valor_ale1 AS alelo_1_1_valor, al2.id_ale1 AS alelo_1_1_id_2, al2.nome_ale1 AS alelo_1_1_nome_2, '
        +'al2.valor_ale1 AS alelo_1_1_valor2 FROM caracteristica_1_1 caract '
        +'INNER JOIN alelos_1_1 AS al1 ON caract.id_alelos_1_1 = al1.id_ale1 '
        +'INNER JOIN alelos_1_1 AS al2 ON caract.id_alelos_1_2 = al2.id_ale1 '
        +'WHERE caract.id_alelos_1_1 = 9 OR caract.id_alelos_1_2 = 10 ORDER BY alelo_1_1_id;');
        res.json(plantas);
        res.json('listando as alelos 1');
    }
    public async listAleloscaract_6(req: Request, res: Response): Promise<void> {     
        const plantas = await pool.query('SELECT caract.*, al1.id_ale1 AS alelo_1_1_id, al1.nome_ale1 AS alelo_1_1_nome, '
        +'al1.valor_ale1 AS alelo_1_1_valor, al2.id_ale1 AS alelo_1_1_id_2, al2.nome_ale1 AS alelo_1_1_nome_2, '
        +'al2.valor_ale1 AS alelo_1_1_valor2 FROM caracteristica_1_1 caract '
        +'INNER JOIN alelos_1_1 AS al1 ON caract.id_alelos_1_1 = al1.id_ale1 '
        +'INNER JOIN alelos_1_1 AS al2 ON caract.id_alelos_1_2 = al2.id_ale1 '
        +'WHERE caract.id_alelos_1_1 = 11 OR caract.id_alelos_1_2 = 12 ORDER BY alelo_1_1_id;');
        res.json(plantas);
        res.json('listando as alelos 1');
    }
    public async listAleloscaract_7(req: Request, res: Response): Promise<void> {     
        const plantas = await pool.query('SELECT caract.*, al1.id_ale1 AS alelo_1_1_id, al1.nome_ale1 AS alelo_1_1_nome, '
        +'al1.valor_ale1 AS alelo_1_1_valor, al2.id_ale1 AS alelo_1_1_id_2, al2.nome_ale1 AS alelo_1_1_nome_2, '
        +'al2.valor_ale1 AS alelo_1_1_valor2 FROM caracteristica_1_1 caract '
        +'INNER JOIN alelos_1_1 AS al1 ON caract.id_alelos_1_1 = al1.id_ale1 '
        +'INNER JOIN alelos_1_1 AS al2 ON caract.id_alelos_1_2 = al2.id_ale1 '
        +'WHERE caract.id_alelos_1_1 = 13 OR caract.id_alelos_1_2 = 14 ORDER BY alelo_1_1_id;');
        res.json(plantas);
        res.json('listando as alelos 1');
    }















    public async listCaract2(req: Request, res: Response): Promise<void> {     
        const plantas = await pool.query('SELECT caract.*, al1.id_ale1 AS alelo_1_1, al1.nome_ale1 AS alelo_1_1, al1.valor_ale1 AS alelo_1_1,'
        +' al2.id_ale1 AS alelo_1_1, al2.nome_ale1 AS alelo_1_1, al2.valor_ale1 AS alelo_1_1 FROM caracteristica_1_1 caract '
        +'INNER JOIN alelos_1_1 AS al1 ON caract.id_alelos_1_1 = al1.id_ale1 '
        +'INNER JOIN alelos_1_1 AS al2 ON caract.id_alelos_1_2 = al2.id_ale1;');
        
       
        res.json(plantas);
        res.json('listando as Caracteristicas 2');
    }
    public async listCaract3(req: Request, res: Response): Promise<void> {     
        const plantas = await pool.query('SELECT caracteristica_1_1.id_caract1, caracteristica_1_1.nome_caract,caracteristica_1_1.id_alelos_1_1,caracteristica_1_1.id_alelos_1_2,  '
        +' alelos_1_1.id_ale1, alelos_1_1.nome_ale1, alelos_1_1.valor_ale1 '
        +'FROM caracteristica_1_1 INNER JOIN alelos_1_1 ON caracteristica_1_1.id_alelos_1_2 = alelos_1_1.id_ale1;');
        res.json(plantas);
        res.json('listando as Caracteristicas 2');
    }


    public async list1(req: Request, res: Response): Promise<any> {     
        const plantas = await pool.query('SELECT plantas.nome, caracteristica_1_2.nome, alelos_1_1.nome, alelos_1_1.valor,'
        +'alelos_1_2.nome, alelos_1_2.valor'
        +'FROM ((((plantas'
        +'INNER JOIN caracteristica_1_1 ON plantas.id_caracteristica_1_1 = caracteristica_1_1.id)'
        +'INNER JOIN caracteristica_1_1 ON caracteristica_1_1.id_caracteristica_1_2 = caracteristica_1_2.id)'
        +'INNER JOIN caracteristica_1_2 ON caracteristica_1_2.id_alelos_1_1 = alelos_1_1.id)'
        +'INNER JOIN caracteristica_1_2 ON caracteristica_1_2.id_alelos_1_2 = alelos_1_2.id) WHERE plantas.id = 1;');
        res.json(plantas);     
        res.json('listando as plantas');
      }

    public async getOnePlanta(req: Request, res: Response): Promise<any>{
        const { id_planta } = req.params;
        const plantas = await pool.query('SELECT * FROM  plantas WHERE id_planta = ?', [id_planta]);
        if (plantas.length > 0){
            return res.json(plantas[0])
        }
        res.status(404).json({text: "Está planta não existe!! "});
    }

    public async create(req: Request, res: Response): Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO alelos_1_1 set ?', [req.body]);
        res.json({message: 'A planta foi criado novamente até que enfim mano!'});
    }
    public update(req: Request, res: Response){
        const { id } = req.params;
        pool.query('UPDATE plantas set ? WHERE id = ?', [req.body, id])
        res.json({message: 'atualizado a planta'});
    }

    public async delete(req: Request, res: Response){
        const { id_planta } = req.params;
        console.log('delete controller:' + id_planta);
        await pool.query('DELETE FROM plantas WHERE id_planta = ?', [id_planta]);
        res.json({message: 'deletado a planta :( !!'});
    }  

    public async createAlelo1(req: Request, res: Response): Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO alelos_1_1 set ?', [req.body]);
        res.json({message: 'O Alelo 1 foi criado!'});
    }
    public async createAlelo2(req: Request, res: Response): Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO alelos_1_2 set ?', [req.body]);
        res.json({message: 'O Alelo 2 foi criado!'});
    }

    public async createPlanta(req: Request, res: Response): Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO plantas set ?', [req.body]);
        res.json({message: 'A Planta  foi criado!'});
    }

    public async createCaract1(req: Request, res: Response): Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO caracteristica_1_1 set ?', [req.body]);
        res.json({message: 'A Caracteristica 1  foi criado!'});
    }

    public async createCaract2(req: Request, res: Response): Promise<void>{
        console.log(req.body);
        await pool.query('INSERT INTO caracteristica_1_1 set ?', [req.body]);
        res.json({message: 'A Caracteristica 2  foi criado!'});
    }
    

}

const plantasController = new PlantasController();
export default plantasController;