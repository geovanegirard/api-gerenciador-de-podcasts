import * as http from "http";
import {getFilterEpisodes, getlistEpisodes} from './controllers/podcasts-controller';



const server = http.createServer( async(req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.method === "GET" && req.url === "/api/list") {
        await getlistEpisodes(req, res);
    }

    if (req.method === "GET" && req.url === "/api/episode") {
        await getFilterEpisodes(req, res);
    }

});

const port = process.env.PORT;

server.listen(port, () => {
    console.log(`Servidor inicializado na porta ${port}.`);
});