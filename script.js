const btn = document.getElementsByTagName('button')[0];
const imgbox = document.getElementById('imgBox');
const qrImage = document.getElementById('Qr-Image');
const input = document.getElementById('Qr-text');
const loadelement = document.createElement('p');
imgbox.append(loadelement);
const getQR = async ()=>{
    loadelement.hidden = false;
    if(input.value.length > 0){
    qrImage.src = '';
    loadelement.classList.remove('invalid-input');
    loadelement.innerHTML = 'Loading ...';
    const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`)
    qrImage.src = response.url;
    loadelement.hidden = true;
    }
    else{
        qrImage.src = '';
        loadelement.classList.add('invalid-input');
        loadelement.innerHTML = 'Invalid Input !';
    }
}

btn.addEventListener('click',getQR);