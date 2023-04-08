import { pool } from "../connectionDB.js";

export const getAlumnos = async (req, res) => {
  try {
    const [alumnos] = await pool.query("SELECT * FROM alumnos");
    res.json(alumnos);
  } catch (error) {
    return res.status(500).json({ message: "Not found" });
  }
};
