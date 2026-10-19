(() => {
 document.querySelectorAll('[data-platform-profile]').forEach(link=>{
  const social=window.portfolio.social.find(s=>s.name===link.dataset.platformProfile);
  if(social?.url){try{const url=new URL(social.url);if(['https:','http:'].includes(url.protocol)){link.href=url.href;link.target='_blank';link.rel='noopener noreferrer'}}catch{}}
 });
})();
