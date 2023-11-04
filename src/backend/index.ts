import dotenv from "dotenv";
import { Server } from "./Server";
import { connectionDB } from "../Skin/infrastructure/connectionDB";

dotenv.config();

const port = process.env.PORT ?? "3001";

const serverInstance =  new Server(port);

serverInstance.listen();

connectionDB();