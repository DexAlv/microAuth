import express from 'express';
import { config } from 'dotenv';
import registerRoutes from './routes/register.routes';
import { errorHandler } from './middlewares/errors';

config();

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.json());

app.use(registerRoutes);

app.use(errorHandler)

export default app;
