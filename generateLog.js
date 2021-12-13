import { getRandom } from "./random.js";

const $chat = document.querySelector('.chat');

export const generateLogs = (type, player1, player2) => {
      const hit = new Howl({
        src: ['./sounds/hit.mp3'],
      });
      const defence = new Howl({
        src: ['./sounds/defence.mp3'],
      });
      const end = new Howl({
        src: ['./sounds/end.mp3'],
      });
      const draw= new Howl({
        src: ['./sounds/draw.mp3'],
      });
    
    let text = null;
    let el = null;
    const generateText = () => {
        el = `<p>${text}</p>`;
        $chat.insertAdjacentHTML('afterbegin', el);
    }

    switch (type) {
        case 'start':
            text = logs['start'].replace('[player1]', player1.name).replace('[player2]', player2.name).replace('[time]', timeNow());
            generateText();
            break
        case 'hit':
            text = timeNow() + ' ' + logs[type][getRandom(18) - 1].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name) + `[- ${player2.lastHp()}]` + `[${player2.hp} / 100]`;
            generateText();
            hit.play();
            break
        case 'defence':
            text = timeNow() + ' ' + logs[type][getRandom(8) - 1].replace('[playerKick]', player2.name).replace('[playerDefence]', player1.name) + `[${player1.lastHp()}]` + `[${player1.hp} / 100]`;
            generateText();
            defence.play();
            break
        case 'end':
            text = timeNow() + ' ' + logs['end'][getRandom(3) - 1].replace('[playerLose]', player2.name).replace('[playerWins]', player1.name);
            generateText();
            end.play();
            break
        case 'draw':
            text = logs['draw'];
            generateText();
            draw.play()
            break
    }
}
const timeNow = () => {
    let date = new Date();
    return `[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}]`
}