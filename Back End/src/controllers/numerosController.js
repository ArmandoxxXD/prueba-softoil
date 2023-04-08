import { pool } from "../connectionDB.js";

export const postNumeros = async (req, res) => {
    try {
      const { valor } = req.body;
      await pool.query(
        "INSERT INTO numeros (valor) VALUES (?)",
        [valor]
      );
      
      if(valor%2==0){
        res.status(201).json({respuesta:true})
      }else{
        res.status(201).json({respuesta:false})
      }

    } catch (error) {
      return res.status(500).json({ message: "not foud" });
    }
  };


  export const getNumeros = async (req, res) => {
    try {
      const [numeros] = await pool.query("SELECT * FROM numeros");
      res.json(numeros);
    } catch (error) {
      return res.status(500).json({ message: "Not found" });
    }
  };