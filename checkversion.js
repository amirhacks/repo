var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if (isIOS) {
console.log('This is a IOS device');
} else {
console.log('This is Not a IOS device');
}