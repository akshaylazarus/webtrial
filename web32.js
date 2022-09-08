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
        if(screen.width > 600){
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
            
            let c2 = document.createElement('div')
            c2.setAttribute('class','l12big')
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
            let c2l2Div = document.createElement('div')
            c2l2Div.setAttribute('class','l2c2')
    
            let l2c2c1 = document.createElement('div')
            l2c2c1.setAttribute('class','l2c2c1')
            let l2c2c2 = document.createElement('div')
            l2c2c2.setAttribute('class','l2c2c2')
            let l2c2c3 = document.createElement('div')
            l2c2c3.setAttribute('class','l2c2c3')
    
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
    
    
            let c11 = document.createElement('div')
            c11.setAttribute('class','l2c2big')
            c11.style.backgroundImage= `url(${asset[10].carddetails.cardimg})`
            c11.style.backgroundSize= 'cover'
            c11.style.backgroundPosition='center'
            c11.style.backgroundRepeat='no-repeat'
            
            
            let c11pill = document.createElement('div')
            c11pill.setAttribute('class','c2l2pill')
            let c11pillHead = document.createElement('div')
            c11pillHead.setAttribute('class','pillhead')
            c11pillHead.innerHTML = asset[10].carddetails.pillbox.line1.attrvalue;
            let c11pillSub = document.createElement('div')
            c11pillSub.setAttribute('class','pillsub')
            c11pillSub.innerHTML = asset[10].carddetails.pillbox.line2.attrvalue;
            let c11pillSub2 = document.createElement('div')
            c11pillSub2.setAttribute('class','pillsub2')
            c11pillSub2.innerHTML = asset[10].carddetails.pillbox.line3.attrvalue;
            c11pill.appendChild(c11pillHead)
            c11pill.appendChild(c11pillSub)
            c11pill.appendChild(c11pillSub2)
            
            c11.appendChild(c11pill)
    
            l2c2c2.appendChild(c11)
    
    
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
            c14.setAttribute('class','l2c3big l3c3m')
            c14.style.backgroundImage= `url(${asset[13].carddetails.cardimg})`
            c14.style.backgroundSize= 'cover'
            c14.style.backgroundPosition='center'
            c14.style.backgroundRepeat='no-repeat'
    
            let c14pill = document.createElement('div')
            c14pill.setAttribute('class','c2l31pill')
            let c14pillHead = document.createElement('div')
            c14pillHead.setAttribute('class','pillhead')
            c14pillHead.innerHTML = asset[13].carddetails.pillbox.line1.attrvalue;
            let c14pillSub = document.createElement('div')
            c14pillSub.setAttribute('class','pillsub')
            c14pillSub.innerHTML = asset[13].carddetails.pillbox.line2.attrvalue;
            let c14pillSub2 = document.createElement('div')
            c14pillSub2.setAttribute('class','pillsub2')
            c14pillSub2.innerHTML = asset[13].carddetails.pillbox.line3.attrvalue;
            c14pill.appendChild(c14pillHead)
            c14pill.appendChild(c14pillSub)
            c14pill.appendChild(c14pillSub2)
            c14.appendChild(c14pill)
    
            let c15 = document.createElement('div')
            c15.setAttribute('class','l2c3big')
            c15.style.backgroundImage= `url(${asset[14].carddetails.cardimg})`
            c15.style.backgroundSize= 'cover'
            c15.style.backgroundPosition='center'
            c15.style.backgroundRepeat='no-repeat'
    
            let c15pill = document.createElement('div')
            c15pill.setAttribute('class','c2l32pill')
            let c15pillHead = document.createElement('div')
            c15pillHead.setAttribute('class','pillhead')
            c15pillHead.innerHTML = asset[14].carddetails.pillbox.line1.attrvalue;
            let c15pillSub = document.createElement('div')
            c15pillSub.setAttribute('class','pillsub')
            c15pillSub.innerHTML = asset[14].carddetails.pillbox.line2.attrvalue;
            let c15pillSub2 = document.createElement('div')
            c15pillSub2.setAttribute('class','pillsub2')
            c15pillSub2.innerHTML = asset[14].carddetails.pillbox.line3.attrvalue;
            c15pill.appendChild(c15pillHead)
            c15pill.appendChild(c15pillSub)
            c15pill.appendChild(c15pillSub2)
            c15.appendChild(c15pill)
    
            c2l3Div.appendChild(c14)
            c2l3Div.appendChild(c15)
    
            l2div.appendChild(c2l1Div)
            l2div.appendChild(c2l2Div)
            l2div.appendChild(c2l3Div)
    
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
            let c17 = document.createElement('div')
            c17.setAttribute('class','l32big')
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
        
            var multiplier =1;
            var density = window.devicePixelRatio;
            var dmul= 1;
            var width = window.screen.width;
            var depth = window.screen.pixelDepth
            if(Number.isInteger(density)){
                dmul = 1
            }
            else{
                console.log('IS FLOAT====>',density)
                dmul = density
            }

   
                
    
            var lc = document.querySelectorAll('.l1big')
            var libigc = 1;  
            var l1bigtimer=30                
            function l1bigLoop() {         
                setTimeout(function() {   
                lc[libigc].classList.add('fade-out') 
                libigc++;                    
                if (libigc < lc.length) {  
                    l1bigtimer = 11100*multiplier           
                    l1bigLoop();             
                }                      
                }, l1bigtimer)
            }
            l1bigLoop(); 
        
            var l3c = document.querySelectorAll('.l3big')
            var l3bigc = 1;  
            var l3bigtimer=100                
            function l3bigLoop() {         
                setTimeout(function() {   
                l3c[l3bigc].classList.add('fade-out') 
                l3bigc++;                    
                if (l3bigc < l3c.length) {  
                    l3bigtimer = 11100*multiplier       
                    l3bigLoop();             
                }                      
                }, l3bigtimer)
            }
            l3bigLoop(); 
        
    
            var l2c1l = document.querySelectorAll('.l2c1')
            var l2c1c = 1;   
            var c2l1timer = 300;               
            function l2c1Loop() {         
                setTimeout(function() {   
                l2c1l[l2c1c].classList.add('fade-out') 
                l2c1c++;                    
                if (l2c1c < l2c1l.length) { 
                    c2l1timer =  23100*multiplier         
                    l2c1Loop();             
                }                      
                }, c2l1timer)
            }
            l2c1Loop(); 
    
            var l2c2l = document.querySelectorAll('.l2c2')
            var l2c2c = 1;   
            var c2l2timer = 5000;               
            function l2c2Loop() {         
                setTimeout(function() {   
                l2c2l[l2c2c].classList.add('fade-out') 
                l2c2c++;                    
                if (l2c2c < l2c2l.length) { 
                    c2l2timer =  23100*multiplier          
                    l2c2Loop();             
                }                      
                }, c2l2timer)
            }
            l2c2Loop(); 
        
            var l2c3l = document.querySelectorAll('.l2c3')
            var l2c3c = 1;   
            var c2l3timer = 11000;               
            function l2c3Loop() {         
                setTimeout(function() {   
                l2c3l[l2c3c].classList.add('fade-out') 
                l2c3c++;                    
                if (l2c3c < l2c3l.length) { 
                    c2l3timer =  26100*multiplier     
                    console.log('L2C3 timer==>',c2l3timer)     
                    l2c3Loop();             
                }                      
                }, c2l3timer)
            }
            l2c3Loop(); 
    
            var l1cl = document.querySelectorAll('.l1c')
            var l1cc = 1;   
            var l1ctimer = 9000;               
            function l1cLoop() {         
                setTimeout(function() {   
                l1cl[l1cc].classList.add('fade-out') 
                l1cc++;                    
                if (l1cc < l1cl.length) { 
                    l1ctimer =  11100*multiplier           
                    l1cLoop();             
                }                      
                }, l1ctimer)
            }
            l1cLoop(); 
    
            var l3cl = document.querySelectorAll('.l3c')
            var l3cc = 1;   
            var l3ctimer = 9000;               
            function l3cLoop() {         
                setTimeout(function() {   
                l3cl[l3cc].classList.add('fade-out') 
                l3cc++;                    
                if (l3cc < l3cl.length) { 
                    l3ctimer =  11000*multiplier        
                    l3cLoop();             
                }                      
                }, l3ctimer)
            }
            l3cLoop(); 
    
            var l12bigl = document.querySelectorAll('.l12big')
            var l12bigc = 1;   
            var l12bigtimer = 4000;               
            function l12bigLoop() {         
                setTimeout(function() {   
                l12bigl[l12bigc].classList.add('fade-out') 
                l12bigc++;                    
                if (l12bigc < l12bigl.length) { 
                    l12bigtimer =11100*multiplier           
                    l12bigLoop();             
                }                      
                }, l12bigtimer)
            }
            l12bigLoop(); 
    
            var l32bigl = document.querySelectorAll('.l32big')
            var l32bigc = 1;   
            var l32bigtimer = 4000;               
            function l32bigLoop() {         
                setTimeout(function() {   
                l32bigl[l32bigc].classList.add('fade-out') 
                l32bigc++;                    
                if (l32bigc < l32bigl.length) { 
                    l32bigtimer =  11100*multiplier;       
                    l32bigLoop();             
                }                      
                }, l32bigtimer)
            }
            l32bigLoop(); 
            

            var objDiv = document.getElementById("l1div");
            var objDivHeight = objDiv.scrollHeight;
            let speed = 1;
            console.log('PIXXXXXL===>',speed)
            setInterval(() => {
                if (objDiv.scrollTop !== objDivHeight) {
                objDiv.scrollTo(0, objDiv.scrollTop + speed);
                }
            }, 12/dmul);  
        
            var objDiv2 = document.getElementById("l2div");
            var objDiv2Height = objDiv2.scrollHeight;
            setInterval(() => {
                if (objDiv2.scrollTop !== objDiv2Height) {
                objDiv2.scrollTo(0, objDiv2.scrollTop + speed);
                }
            }, 25/dmul);
        
            var objDiv3 = document.getElementById("l3div");
            var objDiv3Height = objDiv3.scrollHeight;
            setInterval(() => {
                if (objDiv3.scrollTop !== objDiv3Height) {
                objDiv3.scrollTo(0, objDiv3.scrollTop + speed);
                }
            }, 12/dmul);      
        }else{
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
                c2.setAttribute('class','l1smallm2')
                c2.style.backgroundImage= `url(${asset[1].carddetails.cardimg})`
                c2.style.backgroundSize= 'cover'
                c2.style.backgroundPosition='center'
                c2.style.backgroundRepeat='no-repeat'
                l1m.appendChild(c2)
        
        
                let c3 = document.createElement('div')
                c3.setAttribute('class','l1smallm3')
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
                c4.setAttribute('class','l1smallm4')
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
                c6.setAttribute('class','l1smallm2')
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
                c7.setAttribute('class','l1smallm3')
                c7.style.backgroundImage= `url(${asset[6].carddetails.cardimg})`
                c7.style.backgroundSize= 'cover'
                c7.style.backgroundPosition='center'
                c7.style.backgroundRepeat='no-repeat'

        
                let c8 = document.createElement('div')
                c8.setAttribute('class','l1smallm4')
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
                c10.setAttribute('class','l1smallm2')
                c10.style.backgroundImage= `url(${asset[9].carddetails.cardimg})`
                c10.style.backgroundSize= 'cover'
                c10.style.backgroundPosition='center'
                c10.style.backgroundRepeat='no-repeat'
                l3m.appendChild(c10)
        
        
                let c11 = document.createElement('div')
                c11.setAttribute('class','l1smallm3')
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
                c12.setAttribute('class','l1smallm4')
                c12.style.backgroundImage= `url(${asset[11].carddetails.cardimg})`
                c12.style.backgroundSize= 'cover'
                c12.style.backgroundPosition='center'
                c12.style.backgroundRepeat='no-repeat'
                l3m.appendChild(c12)
            })

            var density = window.devicePixelRatio;
            var mmul= 1;
            if(Number.isInteger(density)){
                mmul = 1
            }
            else{
                console.log('IS FLOAT====>',density)
                mmul = density
            }

   
                
    
            var l1m1 = document.querySelectorAll('.l1smallm')
            var l1mc = 1;  
            var l1mtimer=30                
            function l1mLoop() {         
                setTimeout(function() {   
                l1m1[l1mc].classList.add('fade-out') 
                l1mc++;                    
                if (l1mc < l1m1.length) {  
                    l1mtimer = 7000           
                    l1mLoop();             
                }                      
                }, l1mtimer)
            }
            l1mLoop(); 
        
            var l1m2 = document.querySelectorAll('.l1smallm2')
            var l1m2c = 1;  
            var l1m2timer=1230                
            function l1m2Loop() {         
                setTimeout(function() {   
                l1m2[l1m2c].classList.add('fade-out') 
                l1m2c++;                    
                if (l1m2c < l1m2.length) {  
                    l1m2timer = 7000       
                    l1m2Loop();             
                }                      
                }, l1m2timer)
            }
            l1m2Loop(); 
        
    
            var l1m3 = document.querySelectorAll('.l1small3')
            var l1m3c = 1;   
            var l1m3timer = 3140;               
            function l1m3Loop() {         
                setTimeout(function() {   
                l1m3[l1m3c].classList.add('fade-out') 
                l1m3c++;                    
                if (l1m3c < l1m3.length) { 
                    l1m3timer =  7000         
                    l1m3Loop();             
                }                      
                }, l1m3timer)
            }
            l1m3Loop(); 
    
            var l1m4 = document.querySelectorAll('.l1smallm4')
            var l1m4c = 1;   
            var l1m4timer = 5000;               
            function l1m4Loop() {         
                setTimeout(function() {   
                l1m4[l1m4c].classList.add('fade-out') 
                l1m4c++;                    
                if (l1m4c < l1m4.length) { 
                    l1m4timer =  7000          
                    l1m4Loop();             
                }                      
                }, l1m4timer)
            }
            l1m4Loop(); 

            var objDiv1m = document.getElementById("l1m");
            var objDiv1mHeight = objDiv1m.scrollHeight;
            let speedl1 = 1
            setInterval(() => {
                if (objDiv1m.scrollTop !== objDiv1mHeight) {
                    console.log('SCROLLED L1')
                    objDiv1m.scrollTo(0, objDiv1m.scrollTop + speedl1);
                }
            }, 17/mmul);

            var objDiv2m = document.getElementById("l2m");
            var objDiv2mHeight = objDiv2m.scrollHeight;
            let speedl2=1
            setInterval(() => {
                if (objDiv2m.scrollTop !== objDiv2mHeight) {
                    console.log('SCROLLED L2')
                    objDiv2m.scrollTo(0, objDiv2m.scrollTop + speedl2);
                }
            }, 17/mmul);
        
            var objDiv3m = document.getElementById("l3m");
            var objDiv3mHeight = objDiv3m.scrollHeight;
            setInterval(() => {
                if (objDiv3m.scrollTop !== objDiv3mHeight) {
                    console.log('SCROLLED L3')
                    objDiv3m.scrollTo(0, objDiv3m.scrollTop + speedl1);
                }
            }, 17/mmul);   
        }
    },err =>{
        console.log("ERROR====>",err)
    });
  }
  

    function chunk(arr, n){
        return arr.slice(0,(arr.length+n-1)/n|0).
            map(function(c,i) { return arr.slice(n*i,n*i+n); });
    }
  (function(){
    callNewAssets();
  })();