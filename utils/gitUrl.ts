export function url(val:string):string{
  //将 git+https://github.com/nuxt/nuxt.git 修改为 https://github.com/nuxt
  return val.startsWith('git+') ? val.replace('git+', '').substring(0,val.replace('git+', '').lastIndexOf('/')) + '.png' : val
}
