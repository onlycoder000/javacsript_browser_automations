function bigger_b(){
txt='';
document.querySelectorAll('.search-result-company').forEach((item)=>{
    
    name='"'+item.querySelector('.company-directory-company-card-company-name').innerText+'"';
    link=item.querySelector('.company-directory-company-card-link-container').href;
    try{
    des='"'+item.querySelector('.company-directory-company-card-company-description').innerText+'"';}catch(err){des=''}
    txt+=link+','+name+','+des+' \n'
    
})
var element = document.createElement('a'); element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(txt));  element.setAttribute('download', document.querySelector('html title').innerText+'.csv');element.click();element.remove()
}