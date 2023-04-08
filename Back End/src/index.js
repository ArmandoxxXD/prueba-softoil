import  express  from "express";
import almunosRoutes from './routes/alumnosRoutes.js'
import indexRoutes from './routes/indexRoutes.js'
import numerosRoutes from './routes/numerosRoutes.js'
import cors from "cors";

const app= express();
app.use(express.json());
app.use(cors());

// Routes
app.use(indexRoutes);
app.use(almunosRoutes);
app.use(numerosRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

app.listen(3001)
console.log('Server levantado en el puerto 3001')
