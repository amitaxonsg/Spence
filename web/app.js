document.documentElement.classList.add('js-ready');
const toggle=document.querySelector('.menu-toggle');
const links=document.querySelector('.nav-links');
if(toggle&&links){toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target);}}},{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));}
const enquiry=document.getElementById('enquiry-form');
if(enquiry){enquiry.addEventListener('submit',event=>{event.preventDefault();if(!enquiry.reportValidity())return;const data=new FormData(enquiry);const lines=[`Name: ${data.get('name')}`,`Email: ${data.get('email')}`,`Company: ${data.get('company')||'Not provided'}`,`Location: ${data.get('location')||'Not provided'}`,`Service: ${data.get('service')||'General enquiry'}`,'',String(data.get('message'))];const mailto=`mailto:hello@spencecom.ph?subject=${encodeURIComponent('SpenceCom Project Enquiry - '+(data.get('company')||data.get('name')))}&body=${encodeURIComponent(lines.join('\n'))}`;location.href=mailto;});}
