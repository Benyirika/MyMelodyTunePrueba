# MelodyMia

Proyecto de una página web responsiva para artistas emergentes que desean registrar melodías y canciones propias.

## Tecnologías usadas

- HTML5 semántico
- CSS3 con Flexbox
- Media queries para diseño responsive
- JavaScript para guardar melodías en localStorage
- Git para control de versiones

## Estructura

- `index.html`: estructura principal de la interfaz
- `styles.css`: estilos responsivos y visuales
- `script.js`: lógica para guardar melodías localmente

## Publicación en PaaS

Este proyecto es un sitio estático y puede desplegarse en servicios como Netlify, Render o Cloudflare Pages sin instalar XAMPP ni servidores locales.

### Opción recomendada: Netlify

1. Crea un repositorio en GitHub con estos archivos.
2. Inicia sesión en https://www.netlify.com/
3. Selecciona "Add new site" > "Import an existing project"
4. Conecta tu repositorio de GitHub.
5. Usa la configuración por defecto para un sitio estático.
6. Publica el sitio y copia la URL generada.

## Git

```bash
git init
git add .
git commit -m "Primer lanzamiento MelodyMia"
```

Luego conecta tu repositorio remoto:

```bash
git remote add origin <URL_DE_TU_REPOSITORIO_GITHUB>
git push -u origin main
```

## Vista previa local

Si deseas previsualizar el sitio localmente sin instalar software adicional, puedes abrir directamente el archivo `index.html` en el navegador o ejecutar:

```bash
python -m http.server 8000
```

Y abrir `http://localhost:8000`.
