// 防抖动函数,不让事件频繁的进行触发函数
export function debance(func, delay) {
  let timer = null;
  return function(...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}
