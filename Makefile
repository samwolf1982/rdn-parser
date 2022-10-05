# запуск бекенда 
up:
	docker-compose  up --build -d
# запуск бекенда с логом
up-live:
	docker-compose  up --build





############################ консоли
## консоль php
cli:
	docker-compose exec php-cli /bin/bash
## консоль php-fpm
cli-fpm:
	docker-compose exec php-fpm /bin/bash

## консоль ноды
cli-node:
	docker-compose exec  node /bin/zsh
## консоль nginx
cli-nginx:
	docker-compose exec  nginx /bin/zsh
##----------deprecated


# запуск фронта в докере  live mode https://bixex.local.com
run-dev:
	docker-compose exec  node-compile /bin/zsh -c "npm run start:dev:live:docker"


# запуск фронта без докера live mode  http://localhost:3001
run-front:
	cd  bixex-react-prod && npm run start:dev:live
		


## bild prod live mode  + run-server
run-build-prod-w:
	docker-compose exec  node-compile /bin/zsh -c "npm run build:prod-w"

## bild prod     + run-server
run-build-prod:
	docker-compose exec  node-compile /bin/zsh -c "npm run build:prod"


## bild dev live mode  + run-server
run-build-dev-w:
	docker-compose exec  node-compile /bin/zsh -c "npm run build:dev-w"

## bild dev   + run-server
run-build-dev:
	docker-compose exec  node-compile /bin/zsh -c "npm run build:dev"



## запуск сервера
run-server:
	docker-compose exec  node-compile /bin/zsh -c "npm run server:start"






## консоль сокет сервера
cli-node-socket:
	docker-compose exec  node /bin/sh
## консоль mysql
cli-mysql:
	docker-compose exec mysql /bin/bash

## консоль redis
cli-redis:
	docker-compose exec redis /bin/bash



## консоль ноды admin front
cli-node-admin:
	docker-compose exec  node-build /bin/sh

## остановка докера
down:
	docker-compose down



up-front:
	cd  bixex-react-prod && npm run start-docker:dev:nossr
up-front-prod:
	cd  bixex-react-prod && npm run build:prod && npm run server:start



docker-cli:
	docker-compose exec apch /bin/bash
docker-cli-f:
	docker-compose exec  php-fpm /bin/bash



#очистка всех  образов  докера потом будет все заново устанавливатся
docker-down-remove-all:
	docker-compose down --rmi 'all'

#очистка всех контейров и образов  докера потом будет все заново загружатся и устанавливатся
docker-clear-all:
	docker system prune -a
