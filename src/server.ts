import * as http from "http";
import {getFilterEpisodes, getlistEpisodes} from './controllers/podcasts-controller';



const server = http.createServer( async(req: http.IncomingMessage, res: http.ServerResponse) => {

    //queryString
    //http://localhost:7777/api/episode?p=flow
    const [baseUrl, queryString] = req.url?.split("?") ?? [", "];

    // listar podcasts
    if (req.method === "GET" && baseUrl === "/api/list") {
        await getlistEpisodes(req, res);
    }

    if (req.method === "GET" && baseUrl === "/api/episode") {
        await getFilterEpisodes(req, res);
    }

});

const port = process.env.PORT;

server.listen(port, () => {
    console.log(`Servidor inicializado na porta ${port}.`);
});