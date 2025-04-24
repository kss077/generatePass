let qrInput = document.getElementById('qrText');
let qrImage = document.getElementById('qrImage');
let qrBox = document.getElementById('imgBox');

function addQr() {
    if (qrInput.value.length > 0) {
        qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrInput.value;
        qrBox.classList.add('show-img');
    } else {
        qrInput.classList.add('error');
        setTimeout(()=> {
            qrInput.classList.remove('error');
        }, 1000);
    }
}