import type { CommitInfoType } from "./getCommitInfo";

import PColor from "picocolors";
import { execaTasks } from './execaCommit';
import { CommitTaskTypeEnum } from "@/enum/commitEnum";

interface CommandOptionType {
  commitInfo: CommitInfoType
  task: CommitTaskTypeEnum;
}

const onExecaTask = async (options: CommandOptionType) => {
  const { commitInfo, task } = options;

  if (!commitInfo.message) {
    throw Error("commit message 不能为空")
  }

  const scope = commitInfo.scope ? `(${commitInfo.scope})` : '';
  const mergeMessage = `${commitInfo.gitEmoji}${scope}: ${commitInfo.message}`;

  for (const command of execaTasks[task]) {
    await command(mergeMessage);
  }
}

const execaCommand = async (commandOption: CommandOptionType): Promise<void> => {
  try {
    await onExecaTask(commandOption);
  } catch (error) {
    console.error(
      PColor.red(error),
      error.escapedCommand
    )
  }
}

export default execaCommand;
