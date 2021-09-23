function points(games) {
    var points = 0;
    for (var i = 0; i < games.length; i++){
      if (games[i][0] > games[i][2]){
        points += 3;}
      if (games[i][0] < games[i][2]){
        points += 0; }
      if (games[i][0] === games[i][2]){
        points +=1;}
      }
     return points;
    }

  console.log(points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']))
