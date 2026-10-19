// 有限长度的色彩轨迹：只在鼠标移动期间绘制，不拦截点击。
(() => {
 const motion=matchMedia('(prefers-reduced-motion: reduce)');
 const fine=matchMedia('(hover: hover) and (pointer: fine)');
 if(motion.matches||!fine.matches)return;
 const canvas=document.createElement('canvas');canvas.className='cursor-ribbon';canvas.setAttribute('aria-hidden','true');document.body.append(canvas);
 const context=canvas.getContext('2d');if(!context){canvas.remove();return}
 let points=[],frame=0,dpr=1;const lifetime=650;
 function size(){dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(innerWidth*dpr);canvas.height=Math.round(innerHeight*dpr);context.setTransform(dpr,0,0,dpr,0,0);points=[]}
 function clear(){points=[];if(frame)cancelAnimationFrame(frame);frame=0;context.clearRect(0,0,innerWidth,innerHeight)}
 function draw(time){frame=0;context.clearRect(0,0,innerWidth,innerHeight);points=points.filter(p=>time-p.time<lifetime);
  context.lineCap='round';context.lineJoin='round';
  for(let i=1;i<points.length;i++){const a=points[i-1],b=points[i];const age=(time-b.time)/lifetime,opacity=Math.max(0,1-age)*.64;const hue=255+(i/Math.max(1,points.length-1))*55;
   context.strokeStyle=`hsla(${hue},65%,65%,${opacity})`;context.lineWidth=1.7*(1-age)+.3;context.beginPath();context.moveTo(a.x,a.y);context.lineTo(b.x,b.y);context.stroke();
  }
  if(points.length)frame=requestAnimationFrame(draw);
 }
 addEventListener('pointermove',event=>{if(event.pointerType!=='mouse'||motion.matches||!fine.matches)return;const now=performance.now();const last=points[points.length-1];if(last&&now-last.time<8)return;if(last&&Math.hypot(event.clientX-last.x,event.clientY-last.y)>160)points=[];points.push({x:event.clientX,y:event.clientY,time:now});if(points.length>65)points.shift();if(!frame)frame=requestAnimationFrame(draw)},{passive:true});
 addEventListener('resize',size);addEventListener('blur',clear);document.addEventListener('visibilitychange',()=>{if(document.hidden)clear()});motion.addEventListener('change',()=>{if(motion.matches)clear()});fine.addEventListener('change',()=>{if(!fine.matches)clear()});size();
})();
