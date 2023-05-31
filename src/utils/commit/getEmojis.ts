import ora from "ora";
import gitEmojiJSON from "@/constants/gitEmoji.json";

const getEmojis = async () => {
  const spinner = ora('正在获取 gitEmojis').start();
  try {
    const data = await gitEmojiJSON

    spinner.succeed('GitEmojis 获取成功，已经是最新:')
    return data;
  } catch(error) {
    spinner.fail(`错误: ${error}`)
  }
}

export default getEmojis;
