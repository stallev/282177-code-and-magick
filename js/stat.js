'use strict';

window.renderStatistics = function (ctx, names, times) {
  var histHeight = 150;// высота гистограммы
  var histX = 140;// отступ слева для гистограммы
  var columnWidth = 40;// ширина колонки гистограммы
  var columnIndent = 50;// интервал между колонками
  // вычисление масштаба
  var maxTime = -1;
  for (var z = 0; z < times.length; z++) {
    if (times[z] > maxTime) {
      maxTime = times[z];
    }
  }
  var step = histHeight / maxTime;
  // рисуем тень
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  // рисуем облако
  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.fillRect(100, 10, 420, 270);
  // выводим текст шапки облака
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', histX, 30);
  ctx.fillText('Список результатов: ', histX, 50);
  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];
    var columnHeight = step * time;
    // выводим результаты игроков
    ctx.fillText(time.toFixed(0), histX + i * (columnIndent + columnWidth), 70 + (histHeight - columnHeight));

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgb(0, 0, ' + (Math.random() * 255).toFixed(0) + ')';
    }
    // вывод столбцов гистограммы
    ctx.fillRect(histX + i * (columnIndent + columnWidth), 80 + (histHeight - columnHeight), columnWidth, columnHeight);
    ctx.fillStyle = '#000';
    // вывод подписей к столбцам
    ctx.fillText(name, histX + i * (columnIndent + columnWidth), 100 + histHeight);
  }

};
