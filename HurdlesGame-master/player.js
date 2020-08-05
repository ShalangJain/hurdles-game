class Player{
    constructor(){
        this.index = null;
        this.name = null;
        this.distance = 10;
        this.rank = 0; 
        playercount = playercount + 1;
    }

    static getallplayerinfo(){

 
    }


    findRank(){
    


        
        if (player > players[0] && player > players[1] && player > players[2] && player > players[3]){



        }


    }



   /* getplayercount(){
        var playercountref = database.ref("playerCount");
        playercountref.on("value", function(data){
        playercount = data.val();

        });

    }

    updateplayercount(count){

        var playercountref = database.ref('/');
            playercountref.update({
            playerCount: count
        });

    }

    updateplayerinfo(){
        var playerindex = "players/player" + this.index;
        var playerindexref = database.ref(playerindex);
        playerindexref.set({
            name: this.name,
            distance: this.distance
        });


    }

    static getallplayerinfo(){
        var playerinforef = database.ref("players");
        playerinforef.on("value", (data) => {
            allplayers = data.val();

          });


    }
    */


}