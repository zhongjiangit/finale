// 测试组件加载延迟
const slowImport = (value: any, ms: number = 1000) => {
  return new Promise(resolve => {
      setTimeout(() => resolve(value), ms);
  })
}

export const testFunction = {
  slowImport
}