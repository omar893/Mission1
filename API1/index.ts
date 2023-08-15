import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import carValue from './car-value';
import claimToRisk from './claims-to-risk';

dotenv.config();

const server: Express = express();
server.use(express.json());
const port = process.env.PORT;

server.get('/', (req: Request, res: Response) => {
    res.send('Turners Car Insurance');
});

server.post('/value', (req: Request, res: Response) => {
    res.send(carValue(req.body));
});

server.post('/risk', (req: Request, res: Response) => {
    res.send(claimToRisk(req.body));
});

if (process.env.NODE_ENV !== 'test') {
    server.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`);
    });}



export default server;