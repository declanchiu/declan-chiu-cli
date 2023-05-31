import { execa } from "execa";
import { CommitTaskTypeEnum } from "@/enum/commitEnum";
import errorProcess from "../error/errorProcess";

export const onCommitExeca = async (message: string): Promise<void> => {
  await execa(
    'git',
    ['commit', '-m', message],
    {
      buffer: false,
      stdio: 'inherit'
    }
  )
}

export const onAddExeca = async (): Promise<void> => {
  await execa(
    'git',
    ["add", "."]
  )
}

export const onPushExeca = async (): Promise<void> => {
  try {
    await execa(
      'git',
      ['push']
    )
  } catch(error) {
    errorProcess({ errorMessage: error.stderr })
  }
}

export const execaTasks = {
  [CommitTaskTypeEnum.StageCommit]: [onCommitExeca],
  [CommitTaskTypeEnum.AllCommit]: [onAddExeca, onCommitExeca, onPushExeca]
} as const
