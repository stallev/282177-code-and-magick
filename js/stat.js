'use strict';

window.renderStatistics = function (ctx, names, times) {

  // рисуем тень
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(20, 20, 420, 270);

  // рисуем облако
  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.fillRect(10, 10, 420, 270);

  // выводим текст шапки облака
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 50, 20);
  ctx.fillText('Список результатов: ', 50, 40);

  var maxTime = -1;
  for (var z = 0; z < times.length; z++) {
    if (times[z] > maxTime) {
      maxTime = times[z];
    }
  }

  var histHeight = 150;// высота гистограммы
  var histX = 60;// отступ слева для гистограммы
  var columnWidth = 40;// ширина колонки гистограммы
  var columnIndent = 50;// интервал между колонками
  var myColumnColor = 'rgba(255, 0, 0, 1)';// цвет колонки текущего игрока
  var step = histHeight / maxTime;

  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];
    var columnHeight = step * time;

    // выводим результаты игроков
    ctx.fillText(time, histX + i * (columnIndent + columnWidth), 60);

    if (names[i] === 'Вы') {
      ctx.fillStyle = myColumnColor;
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, (Math.random() % 10 / 10))';
    }
    // вывод столбцов гистограммы
    ctx.fillRect(histX + i * (columnIndent + columnWidth), 80 + (histHeight - columnHeight), columnWidth, columnHeight);

    ctx.fillStyle = '#000';
    // вывод подписей к столбцам
    ctx.fillText(name, histX + i * (columnIndent + columnWidth), 120 + histHeight);
  }

};

var canvas = document.querySelector('canvas');

