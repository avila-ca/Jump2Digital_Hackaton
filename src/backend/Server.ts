import { json, urlencoded } from "body-parser";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { appRouter } from "../Skin/infrastructure/Routes/Routes";

export class Server{
    private readonly express: express.Express;
    private readonly port: string;

    constructor(port: string){
        this.port = port;
        this.express = express();
        this.express.use(helmet());
        this.express.use(cors());
        this.express.use(json());
        this.express.use(urlencoded({extended: true}));
        this.express.use("/skins", appRouter)
    }

    async listen(){
        this.express.listen(this.port, () => {
            console.log(`connected on port ${this.port}`);
        })
    }
    get serv(){
        return this.express;
    }
}
