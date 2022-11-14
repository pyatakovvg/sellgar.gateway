#!/usr/bin/env sh


echo '------------------------------------'
echo '|        Сборка helpers            |'
echo '------------------------------------'

cd ./helpers || return

echo '------------------------------------'
echo 'Пакет "Utils"'
echo '------------------------------------'
cd ./utils && npm run build


echo '------------------------------------'
echo '|        Сборка packages            |'
echo '------------------------------------'

cd ../../packages || return

echo '------------------------------------'
echo 'Пакет "Errors"'
echo '------------------------------------'
cd ./errors && npm run build || return

echo '------------------------------------'
echo 'Пакет "Logger"'
echo '------------------------------------'
cd ../logger && npm run build || return

echo '------------------------------------'
echo 'Пакет "Numeral"'
echo '------------------------------------'
cd ../numeral && npm run build || return

echo '------------------------------------'
echo 'Пакет "Moment"'
echo '------------------------------------'
cd ../moment && npm run build || return

echo '------------------------------------'
echo 'Пакет "Request"'
echo '------------------------------------'
cd ../request && npm run build || return


echo '------------------------------------'
echo '|        Сборка libraries          |'
echo '------------------------------------'

cd ../../libraries || return

echo '------------------------------------'
echo 'Пакет "App"'
echo '------------------------------------'
cd ./app && npm run build || return


echo '------------------------------------'
echo '|        Сборка plugins          |'
echo '------------------------------------'

cd ../../plugins || return

echo '------------------------------------'
echo 'Пакет "rabbit"'
echo '------------------------------------'
cd ./rabbit && npm run build || return