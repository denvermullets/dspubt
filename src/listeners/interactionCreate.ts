import { BaseCommandInteraction, Client, Interaction } from "discord.js";
import { Commands } from "../Commands";

export default (client: Client): void => {
  client.on("interactionCreate", async (interaction: Interaction) => {
    if (interaction.isCommand() || interaction.isContextMenu()) {
      await handleSlashCommand(client, interaction);
    }
  });
};

const handleSlashCommand = async (
  client: Client,
  interaction: BaseCommandInteraction
): Promise<void> => {
  // do stuff here for slash command
  const slashCommand = Commands.find(
    (command) => command.name === interaction.commandName
  );

  if (!slashCommand) {
    interaction.followUp({ content: "An error has occured" });
    return;
  }

  await interaction.deferReply();

  slashCommand.run(client, interaction);
};
