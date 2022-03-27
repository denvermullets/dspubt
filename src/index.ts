import { Client } from "discord.js";
import * as dotenv from "dotenv";
import interactionCreate from "./listeners/interactionCreate";
dotenv.config();

import ready from "./listeners/ready";

const BOT_TOKEN = process.env.BOT_TOKEN;

console.log("Firing up the ole boterino");
// const client = new Client({ intents: 19520 });
const client = new Client({ intents: [] });

ready(client);
interactionCreate(client);

client.login(BOT_TOKEN);

// client.on("ready", () => {
//   console.log(`${client.user?.tag} has logged in`);
// });
