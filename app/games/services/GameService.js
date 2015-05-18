init = function($http){

  var uid = 3;

  var user = {"id": "jcwijger", "name": "Jarno van Wijgerden", "email": "jcwijger@avans.nl", "nickname": "Jarno"}

  //var games = [{"_id":"5541fc5b1872631100678bb4","createdBy":{"_id":"mmaa.schuurmans@avans.nl","name":"Martijn Schuurmans","__v":0,"id":"mmaa.schuurmans@avans.nl"},"createdOn":"2015-04-30T09:56:43.516Z","startedOn":"2015-04-30T09:57:43.516Z","endedOn":"2015-04-30T09:58:43.516Z","gameTemplate":{"_id":"Dragon","__v":0,"id":"Dragon"},"__v":0,"players":[{"_id":"mmaa.schuurmans@avans.nl","name":"Martijn Schuurmans","__v":0,"id":"mmaa.schuurmans@avans.nl"}],"maxPlayers":32,"minPlayers":2,"state":"finished","id":"5541fc5b1872631100678bb4"},{"_id":"5541fd3b1872631100678c45","createdBy":{"_id":"mmaa.schuurmans@avans.nl","name":"Martijn Schuurmans","__v":0,"id":"mmaa.schuurmans@avans.nl"},"createdOn":"2015-04-30T10:00:27.720Z","gameTemplate":{"_id":"Ox","__v":0,"id":"Ox"},"__v":2,"players":[{"_id":"mmaa.schuurmans@avans.nl","name":"Martijn Schuurmans","__v":0,"id":"mmaa.schuurmans@avans.nl"},{"_id":"mmaa.schuurmans@avans.nl","name":"Martijn Schuurmans","__v":0,"id":"mmaa.schuurmans@avans.nl"},{"_id":"lah.debruin@student.avans.nl","name":"Luuk de Bruin","__v":0,"id":"lah.debruin@student.avans.nl"}],"maxPlayers":32,"minPlayers":2,"state":"open","id":"5541fd3b1872631100678c45"},{"_id":"554dbd77065079110052cc88","createdBy":{"_id":"mmaa.schuurmans@avans.nl","name":"Martijn Schuurmans","__v":0,"id":"mmaa.schuurmans@avans.nl"},"createdOn":"2015-05-09T07:55:35.791Z","gameTemplate":{"_id":"Ox","__v":0,"id":"Ox"},"__v":1,"players":[{"_id":"mmaa.schuurmans@avans.nl","name":"Martijn Schuurmans","__v":0,"id":"mmaa.schuurmans@avans.nl"},{"_id":"lah.debruin@student.avans.nl","name":"Luuk de Bruin","__v":0,"id":"lah.debruin@student.avans.nl"}],"maxPlayers":32,"minPlayers":2,"state":"open","id":"554dbd77065079110052cc88"},{"_id":"554df9bb1b298f1100ce2754","createdBy":{"_id":"lah.debruin@student.avans.nl","name":"Luuk de Bruin","__v":0,"id":"lah.debruin@student.avans.nl"},"createdOn":"2015-05-09T12:12:43.244Z","gameTemplate":{"_id":"Ox","__v":0,"id":"Ox"},"__v":0,"players":[{"_id":"lah.debruin@student.avans.nl","name":"Luuk de Bruin","__v":0,"id":"lah.debruin@student.avans.nl"}],"maxPlayers":5,"minPlayers":3,"state":"open","id":"554df9bb1b298f1100ce2754"},{"_id":"554e0ab6de1fa71100110932","createdBy":{"_id":"lah.debruin@student.avans.nl","name":"Luuk de Bruin","__v":0,"id":"lah.debruin@student.avans.nl"},"createdOn":"2015-05-09T13:25:10.527Z","gameTemplate":{"_id":"Ox","__v":0,"id":"Ox"},"__v":0,"players":[{"_id":"lah.debruin@student.avans.nl","name":"Luuk de Bruin","__v":0,"id":"lah.debruin@student.avans.nl"}],"maxPlayers":6,"minPlayers":3,"state":"open","id":"554e0ab6de1fa71100110932"},{"_id":"554e0b25de1fa711001109c3","createdBy":{"_id":"lah.debruin@student.avans.nl","name":"Luuk de Bruin","__v":0,"id":"lah.debruin@student.avans.nl"},"createdOn":"2015-05-09T13:27:01.842Z","gameTemplate":{"_id":"Ox","__v":0,"id":"Ox"},"__v":0,"players":[{"_id":"lah.debruin@student.avans.nl","name":"Luuk de Bruin","__v":0,"id":"lah.debruin@student.avans.nl"}],"maxPlayers":10,"minPlayers":5,"state":"open","id":"554e0b25de1fa711001109c3"},{"_id":"554e0e95de1fa71100110a54","createdBy":{"_id":"lah.debruin@student.avans.nl","name":"Luuk de Bruin","__v":0,"id":"lah.debruin@student.avans.nl"},"createdOn":"2015-05-09T13:41:41.927Z","gameTemplate":{"_id":"Ox","__v":0,"id":"Ox"},"__v":0,"players":[{"_id":"lah.debruin@student.avans.nl","name":"Luuk de Bruin","__v":0,"id":"lah.debruin@student.avans.nl"}],"maxPlayers":20,"minPlayers":5,"state":"open","id":"554e0e95de1fa71100110a54"},{"_id":"554e15fc883bbe11007ebee0","createdBy":{"_id":"lah.debruin@student.avans.nl","name":"Luuk de Bruin","__v":0,"id":"lah.debruin@student.avans.nl"},"createdOn":"2015-05-09T14:13:16.280Z","gameTemplate":{"_id":"Dragon","__v":0,"id":"Dragon"},"__v":0,"players":[{"_id":"lah.debruin@student.avans.nl","name":"Luuk de Bruin","__v":0,"id":"lah.debruin@student.avans.nl"}],"maxPlayers":5,"minPlayers":4,"state":"open","id":"554e15fc883bbe11007ebee0"}]

  var games = [];

  $http.get('http://mahjongmayhem.herokuapp.com/games').
      success(function(data, status, headers, config) {
        for(game in data)
        {
            games.push(data[game]);
        }
      }).
      error(function(data, status, headers, config) {
        console.log("error");
      });


    // var games = [
    //     {
    //      "id": 1,
    //      "layout": "snake", // -> 'shanghai'|'snake'|'ox'|'ram'|'dragon'|'rooster'|'monkey'
    //      "createdOn": "2015-04-28 16:17:08", // date + time
    //      "startedOn": "2015-04-28 16:40:00", // date + time
    //      "endedOn": "2015-04-28 22:00:00", // date + time
    //      "createdBy": {
    //        "id": "lahol", // Avans username
    //        "name": "Louis Hol", // fullname
    //        "email": "lahol@avans.nl", // avans e-mail
    //        "nickname": "losbarros" // maybe filled later?   
    //      },
    //      "minPlayers": 1, // 35 <= x >= 1, Required number of players to start
    //      "maxPlayers": 3,  // 35 <= x >= 1
    //      "players": [{
    //        "id": "lahol", // Avans username
    //        "name": "Louis Hol", // fullname
    //        "email": "lahol@avans.nl", // avans e-mail
    //        "nickname": "losbarros" // maybe filled later?
    //        // Properties like score and isWinner maybe filled later
    //      }],
    //      "state": "open" // -> 'open'|'playing'|'finished'
    //     },
    //     {
    //      "id": 2,
    //      "layout": "shanghai", // -> 'shanghai'|'snake'|'ox'|'ram'|'dragon'|'rooster'|'monkey'
    //      "createdOn": "2015-04-28 16:00:00", // date + time
    //      "startedOn": "2015-04-28 17:00:00", // date + time
    //      "endedOn": "2015-04-28 23:17:00", // date + time
    //      "createdBy": {
    //        "id": "lahol", // Avans username
    //        "name": "Louis Hol", // fullname
    //        "email": "lahol@avans.nl", // avans e-mail
    //        "nickname": "losbarros" // maybe filled later?
    //      },
    //      "minPlayers": 1, // 35 <= x >= 1, Required number of players to start
    //      "maxPlayers": 3,  // 35 <= x >= 1
    //      "players": [{
    //        "id": "lahol", // Avans username
    //        "name": "Louis Hol", // fullname
    //        "email": "lahol@avans.nl", // avans e-mail
    //        "nickname": "losbarros" // maybe filled later?
    //        // Properties like score and isWinner maybe filled later
    //      }],
    //      "state": "open" // -> 'open'|'playing'|'finished'
    //     }
    // ]
    

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