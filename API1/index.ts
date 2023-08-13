import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import carValue from './car-value'

dotenv.config();

const server: Express = express();
server.use(express.json());
const port = process.env.PORT;

server.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

server.post('/', (req: Request, res: Response) => {
    console.log(req.body);
    res.send(carValue(req.body).toString());
});

server.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});