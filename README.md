https://razzlejs.org/getting-started

#Заготовка для php проектов в докере

## docker env
https://docs.docker.com/compose/env-file/



hosts
127.0.0.1	front.local.com
127.0.0.1	api.local.com


cp app-front/example.env.local app-front/.env.local

cp app-back/.env.example app-back/.env

todo need some better
sudo chmod -R 777 ./app-back/storage
sudo chmod -R 777 ./app-back/bootstrap/cache/
