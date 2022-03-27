import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../structures/Command";

export const Hello: Command = {
  name: "hello",
  description: "Returns a greeting",
  type: "CHAT_INPUT",
  run: async (client: Client, interaction: BaseCommandInteraction) => {
    const content = "Hey hey";

    await interaction.followUp({
      ephemeral: true,
      content,
    });
  },
};
