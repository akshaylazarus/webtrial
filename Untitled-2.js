
function callNewAssets(){
  fetch('https://app.pricingculture.com/api/admin/websiteassets?uat=true',{
    method: 'GET',
    headers: {
      'apikey':'5431724c-eddb-48d9-8a55-27b7b44afe01',
      'secret':'0#K2fWObo7qIeZ&ehJhE'
    },
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
    let ddata = data.desktopdata 
    
    if(ddata.length <10){
      for(let i=0;i<5;i++){
        data.desktopdata.forEach(item => {
          ddata.push(item)
        })
      }
    }
    let l1div = document.getElementById('l1div')
    let l2div = document.getElementById('l2div')
    let l3div = document.getElementById('l3div')
  ddata.forEach((item)=>{
      let asset = item
      //a0
      let c1 = document.createElement('div')
      c1.setAttribute('class','l1big')        
      c1.style.backgroundImage= `url(${asset[0].carddetails.cardimg})`
      c1.style.backgroundSize= 'cover'
      c1.style.backgroundPosition='center'
      c1.style.backgroundRepeat='no-repeat'
      
      let c1pill = document.createElement('div')
      c1pill.setAttribute('class','c1pill')
      let c1pillHead = document.createElement('div')
      c1pillHead.setAttribute('class','pillhead')
      c1pillHead.innerHTML = asset[0].carddetails.pillbox.line1.attrvalue;
      let c1pillSub = document.createElement('div')
      c1pillSub.setAttribute('class','pillsub')
      c1pillSub.innerHTML = asset[0].carddetails.pillbox.line2.attrvalue;
      let c1pillSub2 = document.createElement('div')
      c1pillSub2.setAttribute('class','pillsub2')
      c1pillSub2.innerHTML = asset[0].carddetails.pillbox.line3.attrvalue;
      c1pill.appendChild(c1pillHead)
      c1pill.appendChild(c1pillSub)
      c1pill.appendChild(c1pillSub2)

      c1.append(c1pill)
      l1div.appendChild(c1)
      
      //a1
      let c2 = document.createElement('div')
      c2.setAttribute('class','l1big')
      c2.style.backgroundImage= `url(${asset[1].carddetails.cardimg})`
      c2.style.backgroundSize= 'cover'
      c2.style.backgroundPosition='center'
      c2.style.backgroundRepeat='no-repeat'

      let c2pill = document.createElement('div')
      c2pill.setAttribute('class','c1pill')
      let c2pillHead = document.createElement('div')
      c2pillHead.setAttribute('class','pillhead')
      c2pillHead.innerHTML = asset[1].carddetails.pillbox.line1.attrvalue;
      let c2pillSub = document.createElement('div')
      c2pillSub.setAttribute('class','pillsub')
      c2pillSub.innerHTML = asset[1].carddetails.pillbox.line2.attrvalue;
      let c2pillSub2 = document.createElement('div')
      c2pillSub2.setAttribute('class','pillsub2')
      c2pillSub2.innerHTML = asset[1].carddetails.pillbox.line3.attrvalue;
      c2pill.appendChild(c2pillHead)
      c2pill.appendChild(c2pillSub)
      c2pill.appendChild(c2pillSub2)
      c2.append(c2pill)
      l1div.appendChild(c2)

      //a2,a3
      let c1c3 = document.createElement('div')
      c1c3.setAttribute('class','l1c')

      let c3 = document.createElement('div')
      c3.setAttribute('class','l1small l1m1')
      c3.style.backgroundImage= `url(${asset[2].carddetails.cardimg})`
      c3.style.backgroundSize= 'cover'
      c3.style.backgroundPosition='center'
      c3.style.backgroundRepeat='no-repeat'

      let c4 = document.createElement('div')
      c4.setAttribute('class','l1small')
      c4.style.backgroundImage= `url(${asset[3].carddetails.cardimg})`
      c4.style.backgroundSize= 'cover'
      c4.style.backgroundPosition='center'
      c4.style.backgroundRepeat='no-repeat'

      c1c3.appendChild(c3)
      c1c3.appendChild(c4)
      l1div.appendChild(c1c3)

      //a4,a5,a6,a7

      let c2l1Div = document.createElement('div')
      c2l1Div.setAttribute('class','l2c1')

      let c5 = document.createElement('div')
      c5.setAttribute('class','l1small')
      c5.style.backgroundImage= `url(${asset[4].carddetails.cardimg})`
      c5.style.backgroundSize= 'cover'
      c5.style.backgroundPosition='center'
      c5.style.backgroundRepeat='no-repeat'

      let c6 = document.createElement('div')
      c6.setAttribute('class','l1small')
      c6.style.backgroundImage= `url(${asset[5].carddetails.cardimg})`
      c6.style.backgroundSize= 'cover'
      c6.style.backgroundPosition='center'
      c6.style.backgroundRepeat='no-repeat'

      let c7 = document.createElement('div')
      c7.setAttribute('class','l1small')
      c7.style.backgroundImage= `url(${asset[6].carddetails.cardimg})`
      c7.style.backgroundSize= 'cover'
      c7.style.backgroundPosition='center'
      c7.style.backgroundRepeat='no-repeat'

      let c8 = document.createElement('div')
      c8.setAttribute('class','l1small')
      c8.style.backgroundImage= `url(${asset[7].carddetails.cardimg})`
      c8.style.backgroundSize= 'cover'
      c8.style.backgroundPosition='center'
      c8.style.backgroundRepeat='no-repeat'

      c2l1Div.appendChild(c5)
      c2l1Div.appendChild(c6)
      c2l1Div.appendChild(c7)
      c2l1Div.appendChild(c8)
      l2div.appendChild(c2l1Div)

      //c2
      //
      let c2l2Div = document.createElement('div')
      c2l2Div.setAttribute('class','l2c2')

      let l2c2c1 = document.createElement('div')
      l2c2c1.setAttribute('class','l2c2c1')
      let l2c2c2 = document.createElement('div')
      l2c2c2.setAttribute('class','l2c2c2')
      let l2c2c3 = document.createElement('div')
      l2c2c3.setAttribute('class','l2c2c3')

      //a8,a9
      let c9 = document.createElement('div')
      c9.setAttribute('class','l1small l2c2m')
      c9.style.backgroundImage= `url(${asset[8].carddetails.cardimg})`
      c9.style.backgroundSize= 'cover'
      c9.style.backgroundPosition='center'
      c9.style.backgroundRepeat='no-repeat'

      let c10 = document.createElement('div')
      c10.setAttribute('class','l1small')
      c10.style.backgroundImage= `url(${asset[9].carddetails.cardimg})`
      c10.style.backgroundSize= 'cover'
      c10.style.backgroundPosition='center'
      c10.style.backgroundRepeat='no-repeat'

      l2c2c1.appendChild(c9)
      l2c2c1.appendChild(c10)

      //a10

      let c11 = document.createElement('div')
      c11.setAttribute('class','l2c2big')
      c11.style.backgroundImage= `url(${asset[10].carddetails.cardimg})`
      c11.style.backgroundSize= 'cover'
      c11.style.backgroundPosition='center'
      c11.style.backgroundRepeat='no-repeat'

      l2c2c2.appendChild(c11)

      //a11,a12

      let c12 = document.createElement('div')
      c12.setAttribute('class','l1small l2c2m')
      c12.style.backgroundImage= `url(${asset[11].carddetails.cardimg})`
      c12.style.backgroundSize= 'cover'
      c12.style.backgroundPosition='center'
      c12.style.backgroundRepeat='no-repeat'

      let c13 = document.createElement('div')
      c13.setAttribute('class','l1small')
      c13.style.backgroundImage= `url(${asset[12].carddetails.cardimg})`
      c13.style.backgroundSize= 'cover'
      c13.style.backgroundPosition='center'
      c13.style.backgroundRepeat='no-repeat'

      l2c2c3.appendChild(c12)
      l2c2c3.appendChild(c13)

      c2l2Div.appendChild(l2c2c1)
      c2l2Div.appendChild(l2c2c2)
      c2l2Div.appendChild(l2c2c3)

      // a13,a14
      let c2l3Div = document.createElement('div')
      c2l3Div.setAttribute('class','l2c3')

      let c14 = document.createElement('div')
      c14.setAttribute('class','l2c3big')
      c14.style.backgroundImage= `url(${asset[13].carddetails.cardimg})`
      c14.style.backgroundSize= 'cover'
      c14.style.backgroundPosition='center'
      c14.style.backgroundRepeat='no-repeat'

      let c15 = document.createElement('div')
      c15.setAttribute('class','l2c3big')
      c15.style.backgroundImage= `url(${asset[14].carddetails.cardimg})`
      c15.style.backgroundSize= 'cover'
      c15.style.backgroundPosition='center'
      c15.style.backgroundRepeat='no-repeat'

      c2l3Div.appendChild(c14)
      c2l3Div.appendChild(c15)

      l2div.appendChild(c2l1Div)
      l2div.appendChild(c2l2Div)
      l2div.appendChild(c2l3Div)

      //c3
      //a15,a16
      let c16 = document.createElement('div')
      c16.setAttribute('class','l3big')
      c16.style.backgroundImage= `url(${asset[15].carddetails.cardimg})`
      c16.style.backgroundSize= 'cover'
      c16.style.backgroundPosition='center'
      c16.style.backgroundRepeat='no-repeat'

      let c16pill = document.createElement('div')
      c16pill.setAttribute('class','c3pill')
      let c16pillHead = document.createElement('div')
      c16pillHead.setAttribute('class','pillhead')
      c16pillHead.innerHTML = asset[15].carddetails.pillbox.line1.attrvalue;
      let c16pillSub = document.createElement('div')
      c16pillSub.setAttribute('class','pillsub')
      c16pillSub.innerHTML = asset[15].carddetails.pillbox.line2.attrvalue;
      let c16pillSub2 = document.createElement('div')
      c16pillSub2.setAttribute('class','pillsub2')
      c16pillSub2.innerHTML = asset[15].carddetails.pillbox.line3.attrvalue;
      c16pill.appendChild(c16pillHead)
      c16pill.appendChild(c16pillSub)
      c16pill.appendChild(c16pillSub2)
      c16.append(c16pill)
      l3div.appendChild(c16)
      //a1
      let c17 = document.createElement('div')
      c17.setAttribute('class','l3big')
      c17.style.backgroundImage= `url(${asset[16].carddetails.cardimg})`
      c17.style.backgroundSize= 'cover'
      c17.style.backgroundPosition='center'
      c17.style.backgroundRepeat='no-repeat'

      let c17pill = document.createElement('div')
      c17pill.setAttribute('class','c3pill')
      let c17pillHead = document.createElement('div')
      c17pillHead.setAttribute('class','pillhead')
      c17pillHead.innerHTML = asset[16].carddetails.pillbox.line1.attrvalue;
      let c17pillSub = document.createElement('div')
      c17pillSub.setAttribute('class','pillsub')
      c17pillSub.innerHTML = asset[16].carddetails.pillbox.line2.attrvalue;
      let c17pillSub2 = document.createElement('div')
      c17pillSub2.setAttribute('class','pillsub2')
      c17pillSub2.innerHTML = asset[16].carddetails.pillbox.line3.attrvalue;
      c17pill.appendChild(c17pillHead)
      c17pill.appendChild(c17pillSub)
      c17pill.appendChild(c17pillSub2)
      c17.append(c17pill)
      l3div.appendChild(c17)

      //a18,a19
      let c3c3 = document.createElement('div')
      c3c3.setAttribute('class','l3c')

      let c18 = document.createElement('div')
      c18.setAttribute('class','l1small l1m1')
      c18.style.backgroundImage= `url(${asset[17].carddetails.cardimg})`
      c18.style.backgroundSize= 'cover'
      c18.style.backgroundPosition='center'
      c18.style.backgroundRepeat='no-repeat'

      let c19 = document.createElement('div')
      c19.setAttribute('class','l1small')
      c19.style.backgroundImage= `url(${asset[18].carddetails.cardimg})`
      c19.style.backgroundSize= 'cover'
      c19.style.backgroundPosition='center'
      c19.style.backgroundRepeat='no-repeat'

      c3c3.appendChild(c18)
      c3c3.appendChild(c19)
      l3div.appendChild(c3c3)

      
  })
  var objDiv = document.getElementById("l1div");
    var objDivHeight = objDiv.scrollHeight;
    let scrollOffsetL1 = 0;
    let speed = 1;
    setInterval(() => {
      let firstChild = objDiv.firstChild.nodeName;
      console.log('CHILD====>',firstChild);
      if (objDiv.scrollTop !== objDivHeight) {
        objDiv.scrollTo(0, objDiv.scrollTop + speed);
      }
    }, 17);      

    var lc = document.querySelectorAll('.l1big')
      lc.forEach(item =>{
          setTimeout(()=>{
          item.classList.add('fade-out')
          },3000)
      })
    var objDiv2 = document.getElementById("l2div");
    var objDiv2Height = objDiv.scrollHeight;
    let speedl2=0.75
    setInterval(() => {
      if (objDiv2.scrollTop !== objDiv2Height) {
        objDiv2.scrollTo(0, objDiv2.scrollTop + speedl2);
      }
    }, 17);
    
    var objDiv3 = document.getElementById("l3div");
     var objDiv3Height = objDiv.scrollHeight;
    setInterval(() => {
      if (objDiv3.scrollTop !== objDiv3Height) {
        objDiv3.scrollTo(0, objDiv3.scrollTop + speed);
      }
    }, 17);      
    
  });
}

(function(){
  callNewAssets();
})();
