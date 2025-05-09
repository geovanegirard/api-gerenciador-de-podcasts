import * as http from "http";
import {getFilterEpisodes, getlistEpisodes} from './controllers/podcasts-controller';
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";



const server = http.createServer( async(request: http.IncomingMessage, response: http.ServerResponse) => {

    const [baseUrl, queryString] = request.url?.split("?") ?? [", "];

    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getlistEpisodes(request, response);
    }

    if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(request, response);
    }

});

const port = process.env.PORT;

server.listen(port, () => {
    console.log(`Servidor inicializado na porta ${port}.`);
});