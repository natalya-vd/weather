import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
  console.log(chalk.bgRed(' ERROR ') + ' ' + error);
}

const printSuccess = (message) => {
  console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
}

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(' HELP ')}
    Без параметров - вывод погоды
    -s [CITY] установка города
    -t [API_KEY] сохранение токена
    -h вывод помощи
    `
  );
}

const printForcast = (data, icon) => {
  console.log(
    dedent`${chalk.bgBlueBright(` Погода в городе ${data.name} `)}
    ${icon}  ${chalk.greenBright(data.weather[0].description)}
    Температура ${chalk.greenBright(data.main.temp)}
    Ощущается как ${chalk.greenBright(data.main.feels_like)}
    Влажность ${chalk.greenBright(data.main.humidity)} %
    Атмосферное давление ${chalk.greenBright(data.main.pressure)} гПа
    Скорость ветра ${chalk.greenBright(data.wind.speed)} м/сек
    Облачность ${chalk.greenBright(data.clouds.all)} %
    `
  );
}

export {
  printError,
  printSuccess,
  printHelp,
  printForcast
};