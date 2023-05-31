import getEmojis from "@/utils/commit/getEmojis";
import prompts from "./prompts";
import inquirer from "inquirer";

export interface CommitInfoType {
   message: string;
   gitEmoji: string;
   scope: string;
}

const getGitCommitInfo = async (): Promise<CommitInfoType> => {
  const gitEmojisData =  await getEmojis();
  const questions = await prompts(gitEmojisData, { message: "" });
  const answers  = await inquirer.prompt(questions);
  return answers;
}

export default getGitCommitInfo
