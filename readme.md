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

## Структура

- `index.js сам сервер`
- `data/ исходная дата`
- `datasets/companies.js формирование массива компаний с нужными полями`
- `datasets/pollResults.js формирование массива результатов по опросам и чистка данных`
- `datasets/revenueResults.js формирование объекта результатов по оф. данным и чистках, вычисление данных`
- `utils/countingCash.js подсчет всех денег, готовый результат`
- `utils/median функция медианы`

## Задеплоен на heroku

[https://dataanalytics-backend.herokuapp.com/companiesReady](https://dataanalytics-backend.herokuapp.com/companiesReady)
