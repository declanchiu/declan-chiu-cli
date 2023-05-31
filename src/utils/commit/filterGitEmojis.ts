import Fuse from "fuse.js";

export const fuseOptions = {
  threshold: 0.5,
  keys: [
    {
      name: 'name',
      weight: 0.33
    },
    {
      name: 'description',
      weight: 0.67
    }
  ]
}

const filterGitEmojis = (input: any, gitEmojis: any) => {
  const fuse = new Fuse(gitEmojis, fuseOptions)


  return input ? fuse.search(input).map((gitEmoji) => gitEmoji.item) : gitEmojis
}

export default filterGitEmojis;
