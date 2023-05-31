import { ErrorEnum } from "@/enum/errorEnum";
import noUpstreamErrorProcess from "./notUpStream";

interface ErrorInfoType {
  errorMessage: string;
}

const errorProcess = async (errorInfo: ErrorInfoType) => {
   /** git 执行 push 的时候因为当前分支没有 up-stream 导致的 */
  if (errorInfo.errorMessage.includes(ErrorEnum.NotUpStream)) {
    await noUpstreamErrorProcess();
    return;
  }

}

export default errorProcess;
