import inquirer from "inquirer";
import inquirerAutocompletePrompt from 'inquirer-autocomplete-prompt';
import getCommitContent from "@/utils/commit/getCommitContent";
import filterGitEmojis from "@/utils/commit/filterGitEmojis";

inquirer.registerPrompt('autocomplete', inquirerAutocompletePrompt)

const prompts = (gitEmojis: any, options: any) => {
  const { message } = getCommitContent(options);

  return [
    {
      name: "gitEmoji",
      message: "选择一个 gitEmoji：",
      type: 'autocomplete',
      source: (_: any, input: string) => {
        const emojis = filterGitEmojis(input, gitEmojis).map((gitEmoji) => {
          return {
            name: `${gitEmoji.emoji} - ${gitEmoji.description}`,
            value: `${gitEmoji["code"]} ${gitEmoji["name"]}`
          }
        })
        
        return Promise.resolve(emojis)
      }
    },
    {
      name: 'message',
      message: '输入提交消息:',
      ...(message ? { default: message } : {})
    },
    {
      name: 'scope',
      message: '输入 scope:',
      ...(message ? { default: message } : {})
    },
  ]
}

export default prompts;
