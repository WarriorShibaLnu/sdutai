const useRem=()=>{
    let w=document.documentElement.clientWidth
    let size=w/10+'px'
    document.documentElement.style.fontSize=size
}

window.addEventListener('resize', useRem)
useRem()

document.addEventListener('DOMContentLoaded', function() {
    let emoji = document.querySelector(".bottm");

    const emoji_arr = [
        '&#x2728;AI change the world!&#x1F60A;&#x2728;&#x2728;',
        '&#x2728;AI change the world!&#x1F603;&#x2728;&#x2728;',
        '&#x2728;AI change the world!&#x1F607;&#x2728;&#x2728;',
        '&#x2728;AI change the world!&#x1F60B;&#x2728;&#x2728;',
        '&#x2728;AI change the world!&#x1F61A;&#x2728;&#x2728;',
    ];

    emoji.addEventListener('click', function() {
        let emoji_num = Math.floor(Math.random() * emoji_arr.length);
        emoji.innerHTML = `<b>"${emoji_arr[emoji_num]}"</b>`;
    });
});

