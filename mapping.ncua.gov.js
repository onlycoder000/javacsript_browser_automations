dt=[];
ln=0;
states=['Alabama','Califonia'];

function ft(ln,ind){
fetch("https://mapping.ncua.gov/api/Search/GetSearchLocations", {
"headers": {
    "accept": "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/json",
    "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Google Chrome\";v=\"108\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Linux\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://mapping.ncua.gov/",
  "referrerPolicy": "strict-origin-when-cross-origin",    "body":'{"searchText":"'+states[ind]+'","rdSearchType":"address","is_mainOffice":false,"is_mdi":false,"is_member":false,"is_drive":false,"is_atm":false,"is_shared":false,"is_bilingual":false,"is_credit_builder":false,"is_fin_counseling":false,"is_homebuyer":false,"is_school":false,"is_low_wire":false,"is_no_draft":false,"is_no_tax":false,"is_payday":false,"skip":'+ln+',"take":'+(ln+100)+',"sort_item":"distance","sort_direction":"asc"}',
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then((response) => response.json())
  .then((data) => {
      data['list'].forEach((d)=>{dt.push(d['creditUnionNumber']);});
      ln+=data['list'].length;
      if(ln < data['totalResults']){
          ft(ln,ind);
      }
      else{
          var element = document.createElement('a'); element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(dt.join('\n')));  element.setAttribute('download', states[ind]+'.csv');element.click();element.remove();
          if(states[ind+1]){
              ft(0,ind+1);
          }
      }
  });
}

ft(0,0);


