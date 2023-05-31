import { $ } from "execa";


const noUpstreamErrorProcess = async () => {
  const branch = await $`git branch --show-current`;
  await $`git push --set-upstream origin ${branch.stdout}`;
}

export default noUpstreamErrorProcess;
