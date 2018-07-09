SET mypath=%~dp0
cd %mypath:~0,-1%
node main.js
