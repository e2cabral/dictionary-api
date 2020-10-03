import { MongoDB } from '../infra/db/mongodb/helpers/mongodb-helper';

MongoDB
    .connect()
    .then(async () => {
        const app = (await import('./config/app')).default;
        app.listen(3330, () => {
            console.log('************************************************************');
            console.log('*                                                           *');
            console.log('*   .=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-.      *');
            console.log('*   |                     ______                     |      *');
            console.log('*   |                  .-"      "-.                  |      *');
            console.log('*   |                 /            \\                 |      *');
            console.log('*   |     _          |              |          _     |      *');
            console.log('*   |    ( \\         |,  .-.  .-.  ,|         / )    |      *');
            console.log('*   |     > "=._     | )(__/  \\__)( |     _.=" <     |      *');
            console.log('*   |    (_/"=._"=._ |/     /\\     \\| _.="_.="\\_)    |      *');
            console.log('*   |           "=._"(_     ^^     _)"_.="           |      *');
            console.log('*   |               "=\\__|IIIIII|__/="               |      *');
            console.log('*   |              _.="| \\IIIIII/ |"=._              |      *');
            console.log('*   |    _     _.="_.="\\          /"=._"=._     _    |      *');
            console.log('*   |   ( \\_.="_.="     `--------`     "=._"=._/ )   |      *');
            console.log('*   |    > _.="                            "=._ <    |      *');
            console.log('*   |   (_/                                    \\_)   |      *');
            console.log('*   |                                                |      *');
            console.log('*   |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=|      *');
            console.log('*                                                           *');
            console.log('*         LASCIATE OGNI SPERANZA, VOI CH\'ENTRATE            *');
            console.log('*              DEIXEM AS ESPERANÇAS PARA TRÁS               *');
            console.log('*              LEAVE EVERY HOPE, YOU COME IN                *');
            console.log('*************************************************************');
        })
    });
