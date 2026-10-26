document.documentElement.classList.add('js-ready');
const toggle=document.querySelector('.menu-toggle');
const links=document.querySelector('.nav-links');
if(toggle&&links){toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target);}}},{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));}
const enquiry=document.getElementById('enquiry-form');
if(enquiry){enquiry.addEventListener('submit',async event=>{
 event.preventDefault();if(!enquiry.reportValidity())return;
 const data=new FormData(enquiry),button=enquiry.querySelector('button[type="submit"]'),status=document.getElementById('enquiry-status');
 const info=Object.fromEntries(data.entries());button.disabled=true;button.textContent='Sending…';status.textContent='Sending your enquiry securely…';
 try{
  const response=await fetch('/api/enquiry',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(info)});
  const result=await response.json();if(!response.ok)throw new Error(result.error||'Email delivery unavailable');
  status.textContent=`Thank you! Your enquiry was received. Reference: ${result.reference}. Please check your inbox.`;enquiry.reset();
 }catch(error){
  status.textContent='Our mail gateway could not confirm delivery. Your email application will open with the enquiry prepared; please send it to complete your request.';
  const lines=[`Name: ${data.get('name')}`,`Email: ${data.get('email')}`,`Company: ${data.get('company')||'Not provided'}`,`Location: ${data.get('location')||'Not provided'}`,`Service: ${data.get('service')||'General enquiry'}`,'',String(data.get('message'))];
  location.href=`mailto:amit@axon.com.sg?cc=${encodeURIComponent('spencer@axon.com.sg')}&subject=${encodeURIComponent('SpenceCom Project Enquiry - '+(data.get('company')||data.get('name')))}&body=${encodeURIComponent(lines.join('\n'))}`;
 }finally{button.disabled=false;button.textContent='Send project enquiry ↗';}
 });}

const chat=document.getElementById('spence-chat');
if(chat){
 const launch=document.getElementById('chat-launch'),panel=document.getElementById('chat-panel'),close=document.getElementById('chat-close'),feed=document.getElementById('chat-feed'),form=document.getElementById('chat-form'),question=document.getElementById('chat-question');
 const history=[];
 function setOpen(open){panel.hidden=!open;launch.setAttribute('aria-expanded',String(open));if(open)question.focus();}
 launch.addEventListener('click',()=>setOpen(panel.hidden));close.addEventListener('click',()=>setOpen(false));
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!panel.hidden){setOpen(false);launch.focus();}});
 function bubble(message,role){const div=document.createElement('div');div.className=`chat-bubble ${role}`;const chunks=String(message).split(/(https:\/\/[^\s<>]+)/g);for(const chunk of chunks){if(/^https:\/\//.test(chunk)){try{const u=new URL(chunk);if(['spencecom.ph','www.spencecom.ph'].includes(u.hostname)){const a=document.createElement('a');a.href=u.href;a.textContent=chunk;a.target='_blank';a.rel='noopener';div.append(a);continue;}}catch{}}div.append(document.createTextNode(chunk));}feed.append(div);feed.scrollTop=feed.scrollHeight;return div;}
 form.addEventListener('submit',async event=>{
  event.preventDefault();const message=question.value.trim();if(!message)return;question.value='';bubble(message,'visitor');const previous=history.slice(-4);history.push({role:'user',content:message});
  const button=form.querySelector('button');button.disabled=true;question.disabled=true;const pending=bubble('Spence is thinking…','agent');
  try{const response=await fetch('/api/chat',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({message,history:previous})});const data=await response.json();if(!response.ok)throw new Error(data.error||'The AI service is unavailable.');pending.remove();bubble(data.answer,'agent');history.push({role:'assistant',content:data.answer});}
  catch(error){pending.remove();bubble(`${error.message} You can also email support@spencecom.ph or request a consultation at https://www.spencecom.ph/contact/.`,'agent');}
  finally{button.disabled=false;question.disabled=false;question.focus();}
 });
}
