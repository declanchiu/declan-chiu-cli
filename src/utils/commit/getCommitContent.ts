const getCommitContent = (options: any): any => {

  return {
    message: options['message'] || null,
    scope: options['scope'] || null,
    title: options['title'] || null
  }
}

export default getCommitContent;