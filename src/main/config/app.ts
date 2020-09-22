import bodyParser from 'body-parser';
import express from 'express';
import setupRoutes from './routes';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(cors());
setupRoutes(app);

export default app;