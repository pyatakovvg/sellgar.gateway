#!/usr/bin/env sh


echo '------------------------------------'
echo '|        Сборка helpers            |'
echo '------------------------------------'

cd ./helpers || return

echo ''
echo 'Пакет "Utils"'
echo '------------------------------------'
cd ./utils && npx yarn build


echo '------------------------------------'
echo '|        Сборка packages            |'
echo '------------------------------------'

cd ../../packages || return 0

echo '------------------------------------'
echo 'Пакет "Errors"'
echo '------------------------------------'
cd ./errors && npx yarn build || return 0

echo '------------------------------------'
echo 'Пакет "Logger"'
echo '------------------------------------'
cd ../logger && npx yarn build || return 0

echo '------------------------------------'
echo 'Пакет "Request"'
echo '------------------------------------'
cd ../request && npx yarn build || return 0


echo '------------------------------------'
echo '|        Сборка libraries            |'
echo '------------------------------------'

cd ../../libraries || return 0

echo '------------------------------------'
echo 'Пакет "App"'
echo '------------------------------------'
cd ./app && npx yarn build || return 0