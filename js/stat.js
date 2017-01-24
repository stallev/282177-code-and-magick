'use strict()';
window.renderStatistics = function(ctx, names, times){

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(20, 20, 420, 270);

  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.fillRect(10, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 50, 20);

  var maxTime = -1;
  for(var i = 0; i < times.length; i++){
    if(times[i] > maxTime)
      maxTime = times[i];
  }
  ctx.fillText('Список результатов: ', 50, 40);

  var histHeight = 150;
  var histX = 60;
  var columnWidth = 40;
  var columnIndent = 50;
  var diffOpacity = (Math.random() % 10) / 10;
  var myColumnColor = 'rgba(255, 0, 0, 1)';
  var otherColumnColor = 'rgba(0, 0, 255, 1)';
  var step = histHeight / maxTime;

  for(var i = 0; i < times.length; i++){
    var name = names[i];
    var time = times[i];
    var columnHeight = step * time;

    ctx.fillText(time, histX + i * (columnIndent + columnWidth), 60);

    if(names[i] == 'Вы'){
      ctx.fillStyle = myColumnColor;
    }
    else
      ctx.fillStyle = otherColumnColor;

    ctx.fillRect(histX + i * (columnIndent + columnWidth), 80 + (histHeight-columnHeight), columnWidth, columnHeight);

    ctx.fillStyle = '#000';

    ctx.fillText(names[i], histX + i * (columnIndent + columnWidth), 120 + histHeight);
  }

};

var canvas = document.querySelector('.statistics canvas');
window.renderStatistics(canvas.getContext('2d'), ['Иван', 'Сергей', 'Вы'], [20.32, 40.11, 30.18]);
