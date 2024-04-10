
# NodeJsChallenge Sneakers

An application that will evaluate knowledge in Node.js, Express, and MongoDB. The objective of the application is to show a clean and understandable architecture, in addition to being functional and fulfilling the proposed challenge.


## Tech Stack

**MongoDB**, **NodeJS**, **ExpressJS**


## API Reference

#### Get all products

```http
  /api/v1/products
```
#### Get special prices

```http
  /api/v1/price/id/name
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. This is the id of the client|
| `name`      | `string` | **Required**. This is the name of the required product|


## Examples
#### Get all products: /api/v1/products

![App Screenshot](https://media.discordapp.net/attachments/852773716580761630/1227517724507246622/image.png?ex=6628b1f7&is=66163cf7&hm=2033bccc53ef28bc3d1864ff75d188cc16d3a962d034d2836ac50c5a867f94fa&=&format=webp&quality=lossless&width=1119&height=584)

#### Get special prices: /api/v1/price/

![App Screenshot](https://media.discordapp.net/attachments/852773716580761630/1227518643101765632/image.png?ex=6628b2d2&is=66163dd2&hm=11467693fc1da7311bb145e4fefa008b6ffde5adcb5be45cacf68f69b626c524&=&format=webp&quality=lossless&width=900&height=468)


## Deployment

To deploy this project run:

```bash
  npm run build
```
and
```bash
  npm run deploy
```

## Installation
To install this application use:

```bash
  npm install
```
    
## Run Locally

Prod:

```bash
  npm run start
```

Dev:

```bash
  npm run start:dev
```


## Author

This project was made by:

- Juan fernando Álvarez Gallego
- LinkedIn: https://www.linkedin.com/in/juan-fernando-%C3%A1lvarez-gallego-b97b31212/

