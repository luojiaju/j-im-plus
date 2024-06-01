


/**
 * 秒数转时分秒
 * @param endTime   结束时间 
 * @param startTime   开始时间
 */
function timeDifference(endTime: Date, startTime: Date): string {
  if (!(endTime instanceof Date) || !(startTime instanceof Date)) {
    throw new Error("Both endTime and startTime should be valid Date objects.");
  }
  const diffInMilliseconds = endTime.getTime() - startTime.getTime();
  if (diffInMilliseconds < 0) {
    throw new Error("endTime should be after startTime.");
  }
  const diffInSeconds = Math.floor(diffInMilliseconds / 1000);
  const hours = Math.floor(diffInSeconds / 3600);
  const minutes = Math.floor((diffInSeconds % 3600) / 60);
  const seconds = diffInSeconds % 60;

  return `${hours}时 ${minutes}分 ${seconds}秒`;
}

/**
 * 格式化日期
 * @param date   日期
 * @param format 格式
 */
export const formatDate = (date: Date, format = 'yyyy-MM-dd HH:mm:ss'): string => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const formatMap: { [key: string]: any } = {
      yyyy: year.toString(),
      MM: month.toString().padStart(2, '0'),
      dd: day.toString().padStart(2, '0'),
      HH: hour.toString().padStart(2, '0'),
      mm: minute.toString().padStart(2, '0'),
      ss: second.toString().padStart(2, '0')
    }
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, (match) => formatMap[match])
  }
  
