export function generateQRCode(text, callback) {
    const apiUrl =`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(text)}`;
    const xhr =new XMLHttpRequest();
xhr.responseType = 'blob';
xhr.onload=function() {
    if(xhr.status == 200) {
        const reader = new FileReader();
        reader.onloadend = function() {
            callback(null, reader.result);
        };
        reader.readAsDataURL(xhr.response) 
    }else {
        callback(new Error('failed to generate qr code '), null);
    }
};
xhr.onerror = function() {
    callback(new Error('Network Error') , null);
}
xhr.open('GET', apiUrl);
xhr.send();
}


// export function generateQRCode(text, callback) {
//     const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(text)}`;
//     const xhr = new XMLHttpRequest();
//     xhr.responseType = 'blob'; // Correctly set responseType to 'blob'

//     xhr.onload = function() {
//         if (xhr.status === 200) {
//             const reader = new FileReader();
//             reader.onloadend = function() {
//                 callback(null, reader.result); // Successfully read as Data URL
//             };
//             reader.readAsDataURL(xhr.response); // Correctly pass Blob to readAsDataURL
//         } else {
//             callback(new Error('Failed to generate QR code'), null);
//         }
//     };

//     xhr.onerror = function() {
//         callback(new Error('Network Error'), null);
//     };

//     xhr.open('GET', apiUrl);
//     xhr.send();
// }
