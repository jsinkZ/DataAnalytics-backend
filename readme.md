# Серверная часть приложения DataAnalytics

## Установка

Для запуска backend части нужно:

1. [Node.js](https://nodejs.org/) v18.0+.
2. npm v6.14.10+
3. Установленный git
4. Установить все зависимости
5. По умолчанию адрес: [http://localhost:3333](http://localhost:3333)

```sh
cd DataAnalytics-backend
npm i
```

## Команды

```sh
npm start // Запуск
npm run start:dev // Запуск в режиме разработки
```

office, officeData - задание 1
physics, physicsData - задание 2

## Структура

- `index.js сам сервер`

- `data/officeData исходная дата`

- `data/physicsData исходная дата`

- `datasets/officeData/companies.js формирование массива компаний с нужными полями`
- `datasets/officeData/pollResults.js формирование массива результатов по опросам и чистка данных`
- `datasets/officeData/revenueResults.js формирование объекта результатов по оф. данным и чистках, вычисление данных`

- `datasets/physicsData/gasReference.js формирование объекта со справочником парам. газа`
- `datasets/physicsData/sensNoise.js формирование объекта с значениями шумов`
- `datasets/physicsData/mesResults.js формирование объекта с результатами замеров, сами вычисления, готовый объект`

- `utils/countingCash.js подсчет всех денег, готовый результат`
- `utils/median функция медианы`

- `utils/countMass.js функция подсчета массы газа по формуле`
- `utils/dispersion.js функция дисперсии`

## Задеплоен на heroku

[https://dataanalytics-backend.herokuapp.com/companiesReady](https://dataanalytics-backend.herokuapp.com/companiesReady)
