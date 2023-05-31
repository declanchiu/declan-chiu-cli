import { CommitTaskTypeEnum } from "@/enum/commitEnum";

import getGitCommitInfo from './getCommitInfo';
import execaCommand from "./execaCommand";

export const onGit = async (task: CommitTaskTypeEnum) => {
  const commitInfo = await getGitCommitInfo();

  execaCommand({  commitInfo, task });
}
