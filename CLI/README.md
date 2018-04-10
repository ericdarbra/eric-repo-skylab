# Principales comandos 'console'
## ls  
Con este comando puedes listar los elementos de tu directorio actual.

```sh
$ ls
Cmder.lnk*   Laia/   SkylabClass/   Slack.lnk*  'Sublime Text 3.lnk'*   desktop.ini   web/
```
### ls -a
Permite listar los elementos de tu directorio actual incluídos los ocultos.
## cd 
Con este comando puedes moverte entre directorios
```sh
$ cd folder
```
### cd..
Te mueves hacia el directorio padre del actual
## mkdir
Con este comando creas un directorio vacío
```sh
$ mkdir newfolder
```
## mv
Este comando te permite mover un archivo de un lugar a otro o de un nombre a otro.

```sh
 $ mv file.txt \folder\filess.txt
```
## touch
Con touch creas un archivo nuevo (vacío)

```sh
 $ touch .hidden.txt
```
Si creas el archivo con el punto delante se crea en estado oculto.
## echo
Con este comando puedes crear un archivo con un contenido de texto.

```sh
 $ echo "1,2,3,4" > text3.txt
 ```
## rm
Eliminas un directorio

```sh
$ rm folder
```
## grep
Con este comando puedes encontrar un archivo buscando en su contenido.

```sh
$ grep -r . -e  1
``` 
## cat
Con este comando puedes ver el contenido de un fichero

```sh
$ cat file1.txt
```

## pwd

Muestra el directorio actual

## tree

Muestra el árbol de directorios

```sh
tree
```
