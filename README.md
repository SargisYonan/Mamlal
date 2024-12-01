# ܡܡܠܠ - Mamlal

Play the game at: [**mamlal.com**](https://www.mamlal.com)

This is an Assyrian Wordle clone built on top of [**react-wordle**](https://github.com/cwackerfuss/react-wordle). The word list used was gathered from [**Assyrian Languages**](https://www.assyrianlanguages.org)

The word list was scraped and cleaned up using tools developed for [**AssyrianPhonetics**](https://github.com/AssyrianPhonetics/AssyrianPhonetics.github.io). Feel free to reach out for this data.

### Building Locally

Clone the repository

```
$ git clone https://github.com/SargisYonan/Mamlal.git
$ cd Mamlal
```

#### React

```
$ npm install
$ npm run start
```

Open your browser and navigate to: http://localhost:3000

#### Deploy With React
```
$ npx prettier --write src
$ npm run deploy
```

#### Docker

```
$ docker build -t mamlal .
$ docker run mamlal
```

#### Contributing

Open an issue or pull request with your change for review.

Consider addressing one of the [**open feature requests or existing issues**](https://github.com/SargisYonan/Mamlal/issues).

#### Additional Collaborators

[**Dr. Emil Soleyman-Zomalan**](https://github.com/esoleyman)
