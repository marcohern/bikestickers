ng build --env=prod
@echo on
cd ..\laravel5\public\bikestickers
ftp -i -s:..\..\..\angular5\send.ftp
