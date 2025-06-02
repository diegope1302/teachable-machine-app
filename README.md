# Reconocimiento de Gestos con Teachable Machine

## Descripción
Este proyecto implementa un modelo de Machine Learning entrenado en Teachable Machine para reconocer gestos de mano en tiempo real. La aplicación utiliza TensorFlow.js para cargar y ejecutar el modelo directamente en el navegador.

## Funcionalidad
- **Carga del modelo**: El modelo se carga desde la URL pública proporcionada por Teachable Machine.
- **Acceso a la cámara**: La aplicación solicita permiso para acceder a la cámara del dispositivo.
- **Predicción en tiempo real**: La cámara captura imágenes en tiempo real y las procesa mediante el modelo para identificar gestos.

## Tecnologías utilizadas
- **Teachable Machine**: Entrenamiento del modelo.
- **TensorFlow.js**: Ejecución del modelo en el navegador.
- **HTML/CSS/JavaScript**: Interfaz de usuario.

## Cómo ejecutar el proyecto
1. Clona este repositorio o descarga los archivos.
2. Asegúrate de tener un servidor web local (puedes usar Live Server en VS Code).
3. Abre `index.html` en tu navegador.
4. Permite el acceso a la cámara cuando se te solicite.

## Créditos
- **Modelo**: Entrenado en [Teachable Machine](https://teachablemachine.withgoogle.com/models/woUActtOq/) 
- **Biblioteca**: [TensorFlow.js](https://www.tensorflow.org/js) 

## Licencia
Este proyecto está bajo la licencia MIT.