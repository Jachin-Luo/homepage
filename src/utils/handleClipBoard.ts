/*
 * @Descripttion:
 * @Author:
 * @Date: 2023-09-06 16:30:23
 * @LastEditTime: 2023-09-06 16:34:40
 * @FilePath: \00-PersonalHomePage\src\utils\handleClipBoard.ts
 */
export const getClipboardData = () => {
  //获取剪切板数据
  return navigator.clipboard.readText()
}
export const setClipboardData = (data: string) => {
  //设置剪切板数据
  return navigator.clipboard.writeText(data)
}
