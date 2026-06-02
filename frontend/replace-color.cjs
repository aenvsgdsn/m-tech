const fs = require('fs');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if(file.endsWith('.jsx') || file.endsWith('.css')) { 
      results.push(file);
    }
  });
  return results;
}
walk('./src').forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  if(c.includes('text-gold') || c.includes('bg-gold')) {
    c = c.replace(/text-gold/g, 'text-teal').replace(/bg-gold/g, 'bg-teal');
    fs.writeFileSync(f, c);
  }
});
console.log('Replaced colors');
