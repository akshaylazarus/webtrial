
function callNewAssets(){
    fetch('https://app.pricingculture.com/api/admin/newwebsiteassets?uat=true',{
      method: 'GET',
      headers: {
        'apikey':'5431724c-eddb-48d9-8a55-27b7b44afe01',
        'secret':'0#K2fWObo7qIeZ&ehJhE'
      },
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        if(screen.width < 600){
            let ddata = data.mobiledata;
            if(ddata.length <10){
                for(let i=0;i<5;i++){
                  data.mobiledata.forEach(item => {
                    ddata.push(item)
                  })
                }
            } 
            let l1m = document.getElementById('l1m')
            let l2m = document.getElementById('l2m')
            let l3m = document.getElementById('l3m')

            ddata.forEach((item,i)=>{
                let asset = item
                let c1 = document.createElement('div')
                c1.setAttribute('class','l1smallm')        
                c1.style.backgroundImage= `url(${asset[0].carddetails.cardimg})`
                c1.style.backgroundSize= 'cover'
                c1.style.backgroundPosition='center'
                c1.style.backgroundRepeat='no-repeat'
                
                let c1pill = document.createElement('div')
                c1pill.setAttribute('class','c1mpill')
                let c1pillHead = document.createElement('div')
                c1pillHead.setAttribute('class','mpillhead')
                c1pillHead.innerHTML = asset[0].carddetails.pillbox.line1.attrvalue;
                let c1pillSub = document.createElement('div')
                c1pillSub.setAttribute('class','mpillsub')
                c1pillSub.innerHTML = asset[0].carddetails.pillbox.line2.attrvalue;
                c1pill.appendChild(c1pillHead)
                c1pill.appendChild(c1pillSub)
        
                c1.append(c1pill)
                l1m.appendChild(c1)
                
                let c2 = document.createElement('div')
                c2.setAttribute('class','l1smallm')
                c2.style.backgroundImage= `url(${asset[1].carddetails.cardimg})`
                c2.style.backgroundSize= 'cover'
                c2.style.backgroundPosition='center'
                c2.style.backgroundRepeat='no-repeat'
                l1m.appendChild(c2)
        
        
                let c3 = document.createElement('div')
                c3.setAttribute('class','l1smallm')
                c3.style.backgroundImage= `url(${asset[2].carddetails.cardimg})`
                c3.style.backgroundSize= 'cover'
                c3.style.backgroundPosition='center'
                c3.style.backgroundRepeat='no-repeat'

                let c3pill = document.createElement('div')
                c3pill.setAttribute('class','c1mpill')
                let c3pillHead = document.createElement('div')
                c3pillHead.setAttribute('class','mpillhead')
                c3pillHead.innerHTML = asset[2].carddetails.pillbox.line1.attrvalue;
                let c3pillSub = document.createElement('div')
                c3pillSub.setAttribute('class','mpillsub')
                c3pillSub.innerHTML = asset[2].carddetails.pillbox.line2.attrvalue;
                c3pill.appendChild(c3pillHead)
                c3pill.appendChild(c3pillSub)
        
                c3.append(c3pill)
        
                l1m.appendChild(c3)

                let c4 = document.createElement('div')
                c4.setAttribute('class','l1smallm')
                c4.style.backgroundImage= `url(${asset[3].carddetails.cardimg})`
                c4.style.backgroundSize= 'cover'
                c4.style.backgroundPosition='center'
                c4.style.backgroundRepeat='no-repeat'
        
                l1m.appendChild(c4)
        
        
                let c5 = document.createElement('div')
                c5.setAttribute('class','l1smallm')
                c5.style.backgroundImage= `url(${asset[4].carddetails.cardimg})`
                c5.style.backgroundSize= 'cover'
                c5.style.backgroundPosition='center'
                c5.style.backgroundRepeat='no-repeat'

        
                let c6 = document.createElement('div')
                c6.setAttribute('class','l1smallm')
                c6.style.backgroundImage= `url(${asset[5].carddetails.cardimg})`
                c6.style.backgroundSize= 'cover'
                c6.style.backgroundPosition='center'
                c6.style.backgroundRepeat='no-repeat'


                let c6pill = document.createElement('div')
                c6pill.setAttribute('class','c2mrpill')
                let c6pillHead = document.createElement('div')
                c6pillHead.setAttribute('class','mpillhead')
                c6pillHead.innerHTML = asset[5].carddetails.pillbox.line1.attrvalue;
                let c6pillSub = document.createElement('div')
                c6pillSub.setAttribute('class','mpillsub')
                c6pillSub.innerHTML = asset[5].carddetails.pillbox.line2.attrvalue;
                c6pill.appendChild(c6pillHead)
                c6pill.appendChild(c6pillSub)

                c6.appendChild(c6pill)
                
        
                let c7 = document.createElement('div')
                c7.setAttribute('class','l1smallm')
                c7.style.backgroundImage= `url(${asset[6].carddetails.cardimg})`
                c7.style.backgroundSize= 'cover'
                c7.style.backgroundPosition='center'
                c7.style.backgroundRepeat='no-repeat'

        
                let c8 = document.createElement('div')
                c8.setAttribute('class','l1smallm')
                c8.style.backgroundImage= `url(${asset[7].carddetails.cardimg})`
                c8.style.backgroundSize= 'cover'
                c8.style.backgroundPosition='center'
                c8.style.backgroundRepeat='no-repeat'

                let c8pill = document.createElement('div')
                c8pill.setAttribute('class','c2mlpill')
                let c8pillHead = document.createElement('div')
                c8pillHead.setAttribute('class','mpillhead')
                c8pillHead.innerHTML = asset[7].carddetails.pillbox.line1.attrvalue;
                let c8pillSub = document.createElement('div')
                c8pillSub.setAttribute('class','mpillsub')
                c8pillSub.innerHTML = asset[7].carddetails.pillbox.line2.attrvalue;
                c8pill.appendChild(c8pillHead)
                c8pill.appendChild(c8pillSub)

                c8.appendChild(c8pill)
        
                l2m.appendChild(c5)
                l2m.appendChild(c6)
                l2m.appendChild(c7)
                l2m.appendChild(c8)

        
                let c9 = document.createElement('div')
                c9.setAttribute('class','l1smallm')
                c9.style.backgroundImage= `url(${asset[8].carddetails.cardimg})`
                c9.style.backgroundSize= 'cover'
                c9.style.backgroundPosition='center'
                c9.style.backgroundRepeat='no-repeat'

                let c9pill = document.createElement('div')
                c9pill.setAttribute('class','c3mpill')
                let c9pillHead = document.createElement('div')
                c9pillHead.setAttribute('class','mpillhead')
                c9pillHead.innerHTML = asset[8].carddetails.pillbox.line1.attrvalue;
                let c9pillSub = document.createElement('div')
                c9pillSub.setAttribute('class','mpillsub')
                c9pillSub.innerHTML = asset[8].carddetails.pillbox.line2.attrvalue;
                c9pill.appendChild(c9pillHead)
                c9pill.appendChild(c9pillSub)

                c9.appendChild(c9pill)
                l3m.appendChild(c9)
        
                let c10 = document.createElement('div')
                c10.setAttribute('class','l1smallm')
                c10.style.backgroundImage= `url(${asset[9].carddetails.cardimg})`
                c10.style.backgroundSize= 'cover'
                c10.style.backgroundPosition='center'
                c10.style.backgroundRepeat='no-repeat'
                l3m.appendChild(c10)
        
        
                let c11 = document.createElement('div')
                c11.setAttribute('class','l1smallm')
                c11.style.backgroundImage= `url(${asset[10].carddetails.cardimg})`
                c11.style.backgroundSize= 'cover'
                c11.style.backgroundPosition='center'
                c11.style.backgroundRepeat='no-repeat'

                let c11mpill = document.createElement('div')
                c11mpill.setAttribute('class','c3mpill')
                let c11mpillHead = document.createElement('div')
                c11mpillHead.setAttribute('class','mpillhead')
                c11mpillHead.innerHTML = asset[10].carddetails.pillbox.line1.attrvalue;
                let c11mpillSub = document.createElement('div')
                c11mpillSub.setAttribute('class','mpillsub')
                c11mpillSub.innerHTML = asset[10].carddetails.pillbox.line2.attrvalue;
                c11mpill.appendChild(c11mpillHead)
                c11mpill.appendChild(c11mpillSub)

                c11.appendChild(c11mpill)
                l3m.appendChild(c11)
        
                let c12 = document.createElement('div')
                c12.setAttribute('class','l1smallm')
                c12.style.backgroundImage= `url(${asset[11].carddetails.cardimg})`
                c12.style.backgroundSize= 'cover'
                c12.style.backgroundPosition='center'
                c12.style.backgroundRepeat='no-repeat'
                l3m.appendChild(c12)
            })

            var objDiv1m = document.getElementById("l1m");
            var objDiv1mHeight = objDiv1m.scrollHeight;
            let speedl1 = 1
            setInterval(() => {
                if (objDiv1m.scrollTop !== objDiv1mHeight) {
                    console.log('SCROLLED L1')
                    objDiv1m.scrollTo(0, objDiv1m.scrollTop + speedl1);
                }
            }, 17);

            var objDiv2m = document.getElementById("l2m");
            var objDiv2mHeight = objDiv2m.scrollHeight;
            let speedl2=1
            setInterval(() => {
                if (objDiv2m.scrollTop !== objDiv2mHeight) {
                    console.log('SCROLLED L2')
                    objDiv2m.scrollTo(0, objDiv2m.scrollTop + speedl2);
                }
            }, 17);
        
            var objDiv3m = document.getElementById("l3m");
            var objDiv3mHeight = objDiv3m.scrollHeight;
            setInterval(() => {
                if (objDiv3m.scrollTop !== objDiv3mHeight) {
                    console.log('SCROLLED L3')
                    objDiv3m.scrollTo(0, objDiv3m.scrollTop + speedl1);
                }
            }, 17);   
        }
    });
}
  
(function(){
    callNewAssets();
})();
  