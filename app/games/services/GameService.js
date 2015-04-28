init = function(){

 	var uid = 3;

    var user = {"id": "jcwijger", "name": "Jarno van Wijgerden", "email": "jcwijger@avans.nl", "nickname": "Jarno"}

    var games = [
        {
         "id": 1,
         "layout": "snake", // -> 'shanghai'|'snake'|'ox'|'ram'|'dragon'|'rooster'|'monkey'
         "createdOn": "2015-04-28 16:17:08", // date + time
         "startedOn": "2015-04-28 16:40:00", // date + time
         "endedOn": "2015-04-28 22:00:00", // date + time
         "createdBy": {
           "id": "lahol", // Avans username
           "name": "Louis Hol", // fullname
           "email": "lahol@avans.nl", // avans e-mail
           "nickname": "losbarros" // maybe filled later?   
         },
         "minPlayers": 1, // 35 <= x >= 1, Required number of players to start
         "maxPlayers": 3,  // 35 <= x >= 1
         "players": [{
           "id": "lahol", // Avans username
           "name": "Louis Hol", // fullname
           "email": "lahol@avans.nl", // avans e-mail
           "nickname": "losbarros" // maybe filled later?
           // Properties like score and isWinner maybe filled later
         }],
         "state": "open" // -> 'open'|'playing'|'finished'
        },
        {
         "id": 2,
         "layout": "shanghai", // -> 'shanghai'|'snake'|'ox'|'ram'|'dragon'|'rooster'|'monkey'
         "createdOn": "2015-04-28 16:00:00", // date + time
         "startedOn": "2015-04-28 17:00:00", // date + time
         "endedOn": "2015-04-28 23:17:00", // date + time
         "createdBy": {
           "id": "lahol", // Avans username
           "name": "Louis Hol", // fullname
           "email": "lahol@avans.nl", // avans e-mail
           "nickname": "losbarros" // maybe filled later?
         },
         "minPlayers": 1, // 35 <= x >= 1, Required number of players to start
         "maxPlayers": 3,  // 35 <= x >= 1
         "players": [{
           "id": "lahol", // Avans username
           "name": "Louis Hol", // fullname
           "email": "lahol@avans.nl", // avans e-mail
           "nickname": "losbarros" // maybe filled later?
           // Properties like score and isWinner maybe filled later
         }],
         "state": "open" // -> 'open'|'playing'|'finished'
        }
    ]
    

    function formatDate () {
          now = new Date();
          year = "" + now.getFullYear();
          month = "" + (now.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
          day = "" + now.getDate(); if (day.length == 1) { day = "0" + day; }
          hour = "" + now.getHours(); if (hour.length == 1) { hour = "0" + hour; }
          minute = "" + now.getMinutes(); if (minute.length == 1) { minute = "0" + minute; }
          second = "" + now.getSeconds(); if (second.length == 1) { second = "0" + second; }
          return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    }

 
    this.save = function (game) {

        if (game.id == null) {
            game.id = uid++;
            game.createdOn = formatDate();
            game.createdBy = user;
            games.push(game);
        } else {
            for (i in games) {
                if (games[i].id == game.id) {
                    games[i] = game;
                }
            }
        }
    }
    this.get = function (id) {
        for (i in games) {
            if (games[i].id == id) {
                return games[i];
            }
        }

    }
    this.delete = function (id) {
        for (i in games) {
            if (games[i].id == id) {
                games.splice(i, 1);
            }
        }
    }

    this.join = function(id)
    {
        for (i in games) {
            if (games[i].id == id) {
                games[i].players.push(user);
                break;
            }
        }
    }
    this.show = function(id)
    {
        for (i in games) {
            if (games[i].id == id) {
                var txt = "Spelers : \n";
                for(p in games[i].players)
                {
                    txt += "- " + games[i].players[p].name + "\n";
                }
                alert(txt);
            break;
            }
        }
    }

    this.list = function () {
        return games;
    }

};
module.exports = init