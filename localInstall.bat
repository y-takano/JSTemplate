@echo off

echo インストール開始

pause

cmd /c powershell Expand-Archive archives\.npmbox.cache.zip

cmd /c npm install --global --cache ./.npmbox.cache/.npmbox.cache --optional --cache-min 99999999999 --shrinkwrap false npmbox

cmd /c npmunbox archives/jasmine.npmbox

cmd /c npmunbox archives/karma.npmbox

rd /s /q .npmbox.cache
rd /s /q archives

echo インストール完了
pause
pause
