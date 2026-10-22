// usage: node frame.js jobs.json
const { chromium } = require('playwright');const fs=require('fs');
(async()=>{const jobs=JSON.parse(fs.readFileSync(process.argv[2]));const b=await chromium.launch();
for(const j of jobs){const p=await b.newPage({viewport:{width:j.w,height:j.h},deviceScaleFactor:1});
const u=new URL('file:///home/claude/starways-site/store/frame.html');for(const k of ['w','h','t','s','img'])u.searchParams.set(k,j[k]);
await p.goto(u.href);await p.waitForFunction(()=>document.title==='ready');await p.evaluate(()=>document.fonts.ready);await p.waitForTimeout(200);
await p.screenshot({path:j.out});await p.close();console.log('ok',j.out);}
await b.close();})();
