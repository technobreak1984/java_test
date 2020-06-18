'use strict'
{
    const result = document.getElementById('result');

    const button = document.getElementById('button');
    const gu = document.getElementById('gu');
    const tyoki = document.getElementById('tyoki');
    const pa = document.getElementById('pa');
    const movie = document.getElementById('movie');
    gu.addEventListener('click', () => {
        const n = Math.floor(Math.random() * 3);
        switch (n) {
            case 0: //あいこ
                movie.src = 'movie/aiko.mp4'
                result.textContent = 'あいこ！　もう一度！！'
                break;
            case 1: //ユーザーの勝ち
                movie.src = 'movie/tyoki_win.mp4'
                button.style.display = 'none'
                result.textContent = 'You Win!'
                break;
            case 2: //ユーザーの負け
                movie.src = 'movie/pa_lose.mp4'
                button.style.display = 'none'
                result.textContent = 'You Lose!'
                break;
        }
    });
    tyoki.addEventListener('click', () => {
        const n = Math.floor(Math.random() * 3);
        switch (n) {
            case 0: //あいこ
                movie.src = 'movie/aiko.mp4'
                result.textContent = 'あいこ！　もう一度！！'
                break;
            case 1: //ユーザーの勝ち
                movie.src = 'movie/pa_win.mp4'
                button.style.display = 'none'
                result.textContent = 'You Win!'
                break;
            case 2: //ユーザーの負け
                movie.src = 'movie/gu_lose.mp4'
                button.style.display = 'none'
                result.textContent = 'You Lose!'
                break;
        }
    });
    pa.addEventListener('click', () => {
        const n = Math.floor(Math.random() * 3);
        switch (n) {
            case 0: //あいこ
                movie.src = 'movie/aiko.mp4'
                result.textContent = 'あいこ！　もう一度！！'
                break;
            case 1: //ユーザーの勝ち
                movie.src = 'movie/gu_win.mp4'
                button.style.display = 'none'
                result.textContent = 'You Win!'
                break;
            case 2: //ユーザーの負け
                movie.src = 'movie/tyoki_lose.mp4'
                button.style.display = 'none'
                result.textContent = 'You Lose!'
                break;
        }
    });
}