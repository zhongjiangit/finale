const files = require.context('./', true, /\.ts$/);

const helper:any = {}

files.keys().forEach(file => {
  const name = file.replace(/(\.\/|\.ts$|\/index.ts$)/g, '');
  console.log(file);
  console.log(name);
  if (name === 'index' || name.includes('/')) return;
  const output = files(file);
  helper[name] = output;
});
export default helper;