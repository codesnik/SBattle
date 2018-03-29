//База данных уровней
var levelComments = {
  text                  : "задачи миссии",
  prizeOil              : "количество призового топлива",
  prizeDetails          : "количество призовых деталей",
  prizeMoney            : "количество призовых денег",
  maxShips              : "максимальное количество вражеских и своих кораблей на экране до 6-ти",
  target                : "требуется поразить целей",
  numberOfShips         : "количество кораблей в миссии",

  warShip               : "количество кораблей 1-10 типа",
  warShipPrizeMoney     : "денежное вознаграждение за корабли 1 - 10 типа",
  warShipPrizeOil       : "вознаграждение нефти за корабли 1 - 10 типа",
  warShipPrizeDetails   : "вознаграждение деталей за корабли 1 - 10 типа",

  shipMaxY              : "самая ближняя координата по Y, рекомендуется 500, не больше 600",
  shipMinY              : "самая ближняя координата по Y, рекомендуется 350, не больше 300",
  gorizontY             : "линия горизонта (стандарт - 300)",
  speedShipsMin         : "минимальная горизонтальная скорость корабля от 0.1",
  speedShipsMax         : "максимальная горизонтальная скорость кораблей от 0.1",
  speedShipsMaxY        : "максимальная вертикальная скорость кораблей от 0.1",
  speedShipsMaxIncrease : "увеличение скорости кораблей с каждым подбитым кораблём (0.01 - на 1%)",
  delayNewShip          : "пауза перед появлением следующего корабля",
  delayNewShipReduction : "уменьшение паузы появления следующего корабля с каждым подбитым кораблём",
  directionShips        : "появление в % кораблей слева(=100). (50)% - столько же слева и справа)",
  seaSrc                : "адрес картинки моря 1500 на 800, море начинается от линии горизонта",
  skySrc                : "адрес картинки неба 1100 на 300, небо накладывается сверху моря ",
  landSrc               : "адрес картинки земли 1100 на 400, земля идёт верхним слоем",
};

var level1 = {
  text                  : "Конвой 10 кораблей",
  prizeOil              : 10,
  prizeDetails          : 10,
  prizeMoney            : 100,
  maxShips              : 2,
  target                : 5,
  numberOfShips         : 10,

  warShip                 : ["Comment",10, 0,0,0,0,0,0,0,0,0],
  warShipPrizeMoney       : ["Comment",0.5,0,0,0,0,0,0,0,0,0],
  warShipPrizeOil         : ["Comment",0,  0,0,0,0,0,0,0,0,0],
  warShipPrizeDetails     : ["Comment",0,  0,0,0,0,0,0,0,0,0],


  shipMaxY              : 500,
  shipMinY              : 350,
  gorizontY             : 300,
  speedShipsMin         : 0.1,
  speedShipsMax         : 5,
  speedShipsMaxY        : 0.1,
  speedShipsMaxIncrease : 0.01,
  delayNewShip          : 100,
  delayNewShipReduction : 1,
  directionShips        : 80,
  seaSrc                : "images/sea/sea1.jpg",
  skySrc                : "images/sky/sky1.png",
  landSrc               : "images/land/land3.png"
};
var level2 = {
  text                  : "Конвой 10 кораблей",
  prizeOil              : 10,
  prizeDetails          : 10,
  prizeMoney            : 100,
  maxShips              : 2,
  target                : 5,
  numberOfShips         : 10,

  warShip                 : ["Comment",10, 0,0,0,0,0,0,0,0,0],
  warShipPrizeMoney       : ["Comment",0.5,0,0,0,0,0,0,0,0,0],
  warShipPrizeOil         : ["Comment",0,  0,0,0,0,0,0,0,0,0],
  warShipPrizeDetails     : ["Comment",0,  0,0,0,0,0,0,0,0,0],


  shipMaxY              : 500,
  shipMinY              : 350,
  gorizontY             : 300,
  speedShipsMin         : 0.1,
  speedShipsMax         : 5,
  speedShipsMaxY        : 0.1,
  speedShipsMaxIncrease : 0.01,
  delayNewShip          : 100,
  delayNewShipReduction : 5,
  directionShips        : 50,
  seaSrc                : "images/sea/sea2.png",
  skySrc                : "images/sky/sky2.png",
  landSrc               : "images/land/land1.png"
};
var level3 = {
  text                  : "Конвой 10 кораблей",
  prizeOil              : 10,
  prizeDetails          : 10,
  prizeMoney            : 100,
  maxShips              : 2,
  target                : 5,
  numberOfShips         : 10,

  warShip                 : ["Comment",10, 0,0,0,0,0,0,0,0,0],
  warShipPrizeMoney       : ["Comment",0.5,0,0,0,0,0,0,0,0,0],
  warShipPrizeOil         : ["Comment",0,  0,0,0,0,0,0,0,0,0],
  warShipPrizeDedails     : ["Comment",0,  0,0,0,0,0,0,0,0,0],


  shipMaxY              : 500,
  shipMinY              : 350,
  gorizontY             : 300,
  speedShipsMin         : 0.1,
  speedShipsMax         : 5,
  speedShipsMaxY        : 0.1,
  delayNewShip          : 500,
  delayNewShipReduction : 10,
  directionShips        : 100,
  seaSrc                : "images/sea/sea3.png",
  skySrc                : "images/sky/sky3.png",
  landSrc               : "images/land/emptyland.png"
};
var level = [levelComments, level1, level2, level3];
