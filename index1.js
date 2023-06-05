let start=document.getElementById('start');
let c=1;
let a=1;
let b=1;
let e=1;
if(c!=0)
{
    start.addEventListener('click',function()
    {
        let st=document.getElementById('st');
        a=setInterval(() => {
            st.innerHTML=c;
            c++;
            if(c==60)
            {
                c=1;
            }
        },10);

        let v=1;
if(v!=0)
{
    let mt=document.getElementById('mt');
    b=setInterval(function()
    {
        mt.innerHTML=v;
        v++;
        if(v==60)
        {
            v=1;
        }
        if(mt.innerHTML==10)
        {
           window.open('http://127.0.0.1:5500/image.html');
        }
    },1000)
}
let h=1;
if(h!=0)
{
    let ht=document.getElementById('ht');
    e=setInterval(() => {
        ht.innerHTML=h;
        h++;
        if(h==60)
        {
            h=1;
        }
    },60000);
}
    })
}

let stop=document.getElementById('stop');
stop.addEventListener('click',function()
{
clearInterval(a);
clearInterval(b);
clearInterval(e);
});

let reset=document.getElementById('reset');
reset.addEventListener('click',function()
{
    let st=document.getElementById('st');
   let mt= document.getElementById('mt');
    let ht=document.getElementById('ht');
    st.innerHTML=00;
    mt.innerHTML=00;
    ht.innerHTML=00;
 c=1;
 b=1;
 v=1;
})



