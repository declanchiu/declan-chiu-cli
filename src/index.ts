#!/usr/bin/env node
import { program } from "commander";
import { onGit } from "./command/commit";
import { CommitTaskTypeEnum } from "@/enum/commitEnum";


function registerCommand() {
  program
    .command("c")
    .description("提交当前暂存区的全部代码")
    .action(() => {
      onGit(CommitTaskTypeEnum.StageCommit);
    })


  program
    .command("a")
    .description("执行一整个提交过程的命令，新增到暂存区->提交快照->推送代码")
    .action(() => {
      onGit(CommitTaskTypeEnum.AllCommit);
    })
}

registerCommand();

program.parse(process.argv);



