---
sidebar_position: 1
---

# Docker
Docker is the easiest way to get started with the self hosted version of Lago.

## Requirements
* Install [Docker](https://docs.docker.com/get-docker/) on your system
* Make sure [Docker Compose](https://docs.docker.com/compose/install/) is installed and available. It should be the case if you choose to install Docker via Docker Desktop
* Make sure [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) is installed in your system

## Run the app
Run the following commands in a shell.

```bash
# Get the code
git clone https://github.com/getlago/lago.git

# Go to Lago folder
cd lago

# Start
docker-compose up
```

In a browser, navigate to [http://localhost](http://localhost) to connect to the application. Lago API is exposed at [http://localhost:3000](http://localhost:3000).

## Configuration

### Environment variables
Lago uses environment variable to configure the components of the application.
You can override them to customise your setup.

| Variable | Default value | Description |
|--|--|--|
| POSTGRES_HOST | db | Host name of the postgres server |
| POSTGRES_DB | lago | Name of the postgres database |
| POSTGRES_USER | lago | Database user for postgres connection |
| POSTGRES_PASSWORD | changeme | Database password for postrgres connection |
| POSTGRES_PORT | 5432 | Port postgres database is listening to |
| REDIS_HOST | redis | Host name of the redis server |
| REDIS_PORT | 6379 | Port redis database is listening to |
| LAGO_FRONT_URL | http://localhost | URL of the Lago front end application |
| FRONT_PORT | 80 | Port the front end application is listening to |
| LAGO_API_URL | http://localhost:3000 | URL of the Lago back end application |
| API_PORT | 3000 | Port the front end application is listening to |
| SECRET_KEY_BASE | your-secret-key-base-hex-64 | Secret key used for session encryption |
| SENTRY_DSN | | Sentry DSN key for error and performance tracking |
| RSA_PRIVATE_KEY | | Private key used for webhook signatures |
| RSA_PUBLIC_KEY | | Public key used to validate webhook signatures |

:::caution
`POSTGRES_PASSWORD`, `SECRET_KEY_BASE`, `RSA_PRIVATE_KEY` and `SECRET_KEY_BASE` should be changed to improve security of your Lago instance.
:::

:::info
- `SECRET_KEY_BASE` can be generated using `openssl rand -hex 64` command in a shell.

TODO: document RSA keys

:::

### Components

Lago uses the following containers:

| Container | Role |
|--|--|
| front | Front end application |
| api | API back end application |
| api_worker | Asynchronous worker for API application |
| api_clock | Clock worker for API application |
| db | Postgres database engine. Used to store application data |
| redis | Redis database engine. Used as a queuing system for asynchronous tasks |

You can use your own database or redis server.
To do so, just remove db and redis config from the `docker-compose.yml` file and update the environment variables accordingly.