## COMANDOS MAS USADOS

Nunca trabajar en rama master.

### Iniciar un proyecto

```sh
$ git init
```

### Ver estado

```sh
$ git status
```

### Añadir archivos cambiados al staging area (al cajon )

```sh
$ git add ./mydir
```

### guardar en el repositorio local

```sh
$ git commit -m "message"
```

### Ver cambios en relación a cambios anteriores (commits anteriores)

```sh
$ git diff
```

### Ver últimos cambios

```sh
$ git log
```

### Crear una rama

```sh
$ git checkout -b feature/add-js
```

### Cambiar a una rama

```sh
$ git checkout develop
```

### Clonar un repositorio

```sh
$ git clone ./root
```

### Ver ramas

```sh
$ git branch
```

### eliminar ramas

```sh
$ git branch -d feature/js
```

### Integrar cambios de una rama a otra en la que estoy

```sh
$ git merge feature/js
```

### VAciar el staging area ("cajon") 

```sh
$ git reset
```

### Deshacer cambios y volver al estado del último commit 

```sh
$ git reset --hard HEAD
```