# Marvel Heroes Project

## Descripción
Este proyecto es una aplicación de Angular que utiliza la API de Marvel para mostrar información sobre héroes, cómics y otros elementos relacionados. Los usuarios pueden buscar personajes, agregar favoritos y explorar detalles de cada héroe.

## Estructura del Proyecto

```
src/
├── app/
│   ├── interface/
│   │   ├── comics.ts      
│   │   ├── marvel.ts     
│   ├── marvel/
│   │   ├── pages/
│   │   │   ├── favorites-page/  
│   │   │   ├── info-hero-page/  
│   │   │   ├── list-hero-page/
│   │   ├── marvel-routing.module.ts 
│   │   ├── marvel.module.ts         
│   ├── services/
│   │   ├── favorites.service.ts     
│   │   ├── marvel-api.service.ts  
│   ├── shared/
│   │   ├── components/
│   │   │   ├── card/      
│   │   │   ├── heart/     
│   │   │   ├── menu/   
│   │   │   ├── search/    
│   │   ├── shared.module.ts  
│   ├── assets/
│   │   ├── marvel-logo.png  
│   ├── app-routing.module.ts 
│   ├── app.component.*       
│   ├── app.module.ts         
```

## Detalles de las Carpetas

### **interface/**
Contiene definiciones de interfaces TypeScript para estructurar los datos obtenidos de la API de Marvel:
- `comics.ts`: Estructura de datos para los cómics.
- `marvel.ts`: Estructura de datos para personajes, eventos y más.

### **marvel/pages/**
Contiene las páginas principales de la aplicación:
- `favorites-page`: Muestra los personajes favoritos del usuario.
- `info-hero-page`: Muestra información detallada sobre un personaje específico.
- `list-hero-page`: Página inicial para listar personajes obtenidos de la API de Marvel.

### **services/**
Servicios que manejan la lógica del negocio:
- `favorites.service.ts`: Administra los personajes marcados como favoritos por el usuario.
- `marvel-api.service.ts`: Realiza las llamadas a la API de Marvel para obtener datos como personajes y cómics.

### **shared/components/**
Componentes reutilizables en toda la aplicación:
- `card/`: Componente de tarjeta para mostrar personajes.
- `heart/`: Componente para ir a la página de favoritos y llevar el contador
- `menu/`: Barra de navegación.
- `search/`: Barra de búsqueda para filtrar personajes.

### **assets/**
Contiene recursos estáticos como imágenes y estilos.

### **app.component.* y app.module.ts**
- `app.component.*`: Configuración del componente principal de Angular.
- `app.module.ts`: Módulo raíz de la aplicación.

## Configuración de Rutas
- **`app-routing.module.ts`**: Define las rutas principales de la aplicación.
- **`marvel-routing.module.ts`**: Maneja las rutas específicas del módulo de Marvel, como las páginas de héroes y favoritos.

## Cómo Ejecutar el Proyecto
1. Clona el repositorio.
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Ejecuta el proyecto en modo de desarrollo:
   ```bash
   ng serve
   ```
4. Abre la aplicación en [http://localhost:4200](http://localhost:4200).

## Funcionalidades Principales
- **Búsqueda de personajes**: Busca héroes usando el cuadro de búsqueda.
- **Favoritos**: Marca personajes como favoritos y accede a ellos desde la página de favoritos.
- **Información detallada**: Accede a detalles de personajes individuales.

## Dependencias
- **Angular**: Framework principal para construir la aplicación.
- **RxJS**: Para manejar programación reactiva.
- **API de Marvel**: Fuente de datos para la aplicación.


