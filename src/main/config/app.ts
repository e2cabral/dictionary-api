import bodyParser from 'body-parser';
import express from 'express';
import setupRoutes from './routes';

const app = express();

app.use(bodyParser.json());
setupRoutes(app);

export default app;