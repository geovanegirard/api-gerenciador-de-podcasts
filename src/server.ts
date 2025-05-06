import * as http from "http";
import {getlistEpisodes} from './controllers/podcasts-controller';



const server = http.createServer( async(req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.method === "GET") {
        await getlistEpisodes(req, res);
    }

});

const port = process.env.PORT;

server.listen(port, () => {
    console.log(`Servidor inicializado na porta ${port}.`);
});