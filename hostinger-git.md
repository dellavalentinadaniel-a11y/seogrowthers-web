# Despliegue con Git en Hostinger

1. **Inicializa Git en el proyecto (local)**
   ```bash
   git init
   git add .
   git commit -m "Initial"
   ```

2. **Crea un repositorio en GitHub/GitLab**. Ejemplo:
   ```bash
   git remote add origin git@github.com:tuusuario/seogrowthers-web.git
   git push -u origin main
   ```

3. **Configura Git en Hostinger**
   - Panel → “Git” (o “Deploy Git” dependiendo del plan)
   - Crea una app Git: añade la URL del repo, el branch (main) y la carpeta destino (`/domains/tudominio.com`)
   - Hostinger hará `git clone` en esa ruta

4. **Automatiza despliegues**
   - Cada vez que hagas `git push`, en Hostinger desde el panel pulsa “Pull” para actualizar
   - Tras el pull: `npm install`, `npm run build` y reinicia proceso (`npm run start` / panel Node.js / pm2)

5. **Variables de entorno**
   - Sigue el panel de Node.js (Sección “Node.js App”) para add configs antes de `npm run build`

6. **Recomendaciones**
   - Añade `.gitignore` completo (node_modules, .next, logs, etc.) antes de comitear
   - Usa ramas/PR para organizar cambios

