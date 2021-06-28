function Captcha() {
    var alpha = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
                  'M', 'O', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V' ,'W', 'X', 'Y', 'Z',
                  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
                  'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
                  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];

    for ( var i=0; i<=6; i++) {
        
        var a = alpha[ Math.floor( Math.random() * alpha.length) ];
        var b = alpha[ Math.floor( Math.random() * alpha.length) ];
       var c = alpha[ Math.floor( Math.random() * alpha.length) ];
        var d = alpha[ Math.floor( Math.random() * alpha.length) ];
        var e = alpha[ Math.floor( Math.random() * alpha.length) ];
        var f = alpha[ Math.floor( Math.random() * alpha.length) ];
        var g = alpha[ Math.floor( Math.random() * alpha.length) ];
    }

    var code = a + ' ' + b + ' ' + c + ' ' + d + ' ' + e + ' ' + f + ' ' + g;

    document.getElementById("mainCaptcha").innerHTML = code;
    document.getElementById("mainCaptcha").value = code;
}

function validCaptcha() {
    var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
    var string2 = removeSpaces(document.getElementById('txtInput').value);

    if ( string1 != string2 ){
        return ("Wrong captcha or missing ");
    }
}

function removeSpaces(string){
    return string.split(' ').join('');
}