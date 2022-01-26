var effect_box = document.getElementsByClassName('text-effect');
// 효과 함수
function effect(object, speed) {

    // 해당 객체안에 들어가있는 모든 텍스트갯수를 불러옵니다.
    var object_len = object.item(0).innerText.length + 2;
    // 해당 객체안에 들어가있는 모든 텍스트를 변수에 할당합니다.
    var object_text = object.item(0).innerText;

    // 기존에 있는 text모두 제거
    object.item(0).innerHTML = '';

    for (var i = 0; i <= object_len; i++) {
        // 텍스트를 감싸줄 'p' 태그를 생성합니다.
        n_tag = document.createElement("p");
        // 해당 div에 감싸줄 'p' 태그를 추가합니다.
        object.item(0).append(n_tag);
        // 넣은 'p' 태그 안에 텍스트를 추가합니다.
        n_tag.append(object_text.charAt(i))

        if (i >= object_len) {
            var anima = true;
        }
    }
    if (anima === true) {
        var turn = 0;
        var opacity_txt = setInterval(function () {
            document.querySelectorAll('p').item(turn).style.opacity = '1';
            turn++;

            // object_len 갯수와 turn 갯수가 동일해지면 작동 중지
            if (object_len === turn) {
                clearInterval(opacity_txt);
            }
        }, speed);
    }

    var p = $('.text-effect>p');
    var str = p.text();
    var searchvalue = ' ';
    var pos = 0;
    while (true) {
        var foundPos = str.indexOf(searchvalue, pos);
        if (foundPos == -1) break;
        console.log( foundPos );
        pos = foundPos + 1;

        p.eq(foundPos).addClass('mr5');
    }
}

