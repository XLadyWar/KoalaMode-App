# KoalaMode

KoalaMode es una aplicación web de productividad que te ayuda a gestionar tu tiempo de trabajo y descanso, inspirada en la tranquilidad y el ritmo pausado de los koalas.

## 📋 Descripción

KoalaMode es un temporizador de productividad que combina ciclos de enfoque y descanso para mejorar tu rendimiento y bienestar. La aplicación te permite personalizar tus tiempos de trabajo concentrado y pausas, ofreciendo actividades de descanso basadas en diferentes categorías para hacer tus pausas más conscientes y efectivas.

## ✨ Características principales

- **Temporizador Pomodoro personalizable**: Configura la duración de tus sesiones de enfoque y descanso según tus necesidades.
- **Actividades de descanso**: Sugerencias de actividades categorizadas para hacer tus pausas más significativas.
- **Categorías personalizables**: Selecciona las categorías de actividades que más te interesen.
- **Interfaz visual atractiva**: Diseño minimalista con animaciones fluidas y transiciones suaves.
- **Experiencia inmersiva**: Fondos dinámicos que cambian según el modo (enfoque o descanso).
- **Totalmente responsivo**: Funciona en dispositivos móviles y de escritorio.

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- GSAP (GreenSock Animation Platform)

## 📁 Estructura del proyecto

```
KoalaMode/
│
├── index.html              # Página de bienvenida
├── formulario.html         # Formulario de configuración inicial
├── timer.html              # Temporizador principal y actividades
│
├── css/
│   ├── style.css           # Estilos globales
│   ├── welcome.css         # Estilos de la página de bienvenida
│   ├── formulario.css      # Estilos del formulario
│   ├── timer.css           # Estilos del temporizador
│   └── menu.css            # Estilos del menú de configuración
│
├── js/
│   ├── fondo.js            # Animaciones de fondo
│   ├── timer.js            # Lógica del temporizador
│   ├── menu.js             # Funcionalidad del menú de configuración
│   ├── storage.js          # Gestión del almacenamiento local
│   └── sonido.js           # Gestión de sonidos y alertas
│
└── assets/                 # Imágenes, iconos y recursos
```

## 🚀 Cómo usar

1. **Página de inicio**: Al abrir la aplicación, serás recibido con una pantalla de bienvenida que te introduce al concepto de KoalaMode.

2. **Configuración inicial**: En el formulario inicial, podrás:
   - Introducir tu nombre para una experiencia personalizada
   - Seleccionar categorías de actividades para tus descansos
   - Establecer la duración de tus sesiones de enfoque y descanso

3. **Temporizador**:
   - Utiliza los botones de reproducción, pausa y reinicio para controlar tu sesión
   - Observa el progreso visual en el círculo animado
   - Al finalizar una sesión de enfoque, recibirás una notificación y podrás elegir una categoría para tu actividad de descanso

4. **Actividades de descanso**:
   - Se te presentará una actividad aleatoria basada en la categoría seleccionada
   - Puedes solicitar otra actividad si la sugerida no te conviene
   - Al finalizar, volverás automáticamente al modo de enfoque

5. **Menú de configuración**:
   - Accede al menú de configuración desde el icono de ajustes
   - Modifica la duración de tus sesiones de enfoque y descanso
   - Gestiona tus categorías de actividades preferidas

## ⚙️ Configuración

KoalaMode permite personalizar:

- **Duración del enfoque**: Tiempo dedicado al trabajo concentrado (predeterminado: 25 minutos)
- **Duración del descanso**: Tiempo dedicado a pausas (predeterminado: 5 minutos)
- **Categorías de actividades**: Selecciona entre:
  - Creatividad
  - Movimiento Suave
  - Escritura
  - Autocuidado
  - Respira
  - Sorprendeme

## 💾 Almacenamiento

La aplicación utiliza localStorage para guardar tus preferencias, por lo que no necesita conexión a internet después de la carga inicial y recordará tu configuración entre sesiones.

## 📱 Compatibilidad

KoalaMode funciona en navegadores modernos y está diseñado para ser responsivo en:
- Ordenadores de escritorio
- Tablets
- Dispositivos móviles

## 🔮 Próximas características

- Estadísticas de productividad
- Temas personalizables
- Sonidos ambientales
- Sincronización entre dispositivos
- Modo oscuro



