import { Client, Intents } from "discord.js";
import * as dotenv from "dotenv";
import interactionCreate from "./listeners/interactionCreate";
dotenv.config();

import ready from "./listeners/ready";

const BOT_TOKEN = process.env.BOT_TOKEN;

console.log("***\n--> Firing up the boterino\n***");

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

ready(client);
interactionCreate(client);

client.login(BOT_TOKEN);
