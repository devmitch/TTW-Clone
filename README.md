# TTW-Clone

## Setup

To start development, run

```sh
python3 -m venv venv
. venv/bin/activate
npm install
pip3 install -r requirements.txt
```

Remember to deactivate the `venv` later:

```sh
deactivate
```

## Running

To build the front-end JS, run

```sh
npm run build
```

Alternatively, you can make Babel watch the files:

```sh
npm run build-watch
```

To start the back-end server (Flask), run

```sh
npm run start
```
