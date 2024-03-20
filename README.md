# Simple Test Nginx Load Balancing Using PM2 Express.js RESTful API

- Clone this repository

```shell
git clone https://github.com/armandwipangestu/example-express-nginx-load-balancer
```

- Install PM2 Global

```shell
yarn global add pm2
```

- Install dependency express

```shell
cd example-express-nginx-load-balancer && yarn
```

- Start Express.js with PM

```shell
pm2 start
```

- Copy Nginx Config

```shell
cp nginx.conf <location of nginx config>
```

- Restart Nginx Service

```shell
nginx -s reload
```

- Trying hit api with `curl` and `jq`

> **NOTE**: Try to hit or run this command more than one to see the effect.
> You can use another endpoint `/products` also

```shell
curl http://localhost:8081/users | jq '.'
```
