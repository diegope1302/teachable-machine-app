// Variables globales
let model, webcam, labelContainer, maxPredictions;
const MODEL_URL = "https://teachablemachine.withgoogle.com/models/APQesfgP0/"; 

// Inicialización del modelo y webcam
async function init() {
    try {
        const modelURL = MODEL_URL + "model.json";
        const metadataURL = MODEL_URL + "metadata.json";

        // Cargar modelo
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        // Configurar webcam
        const flip = true;
        webcam = new tmImage.Webcam(200, 200, flip);
        await webcam.setup();
        await webcam.play();
        
        // Añadir elementos al DOM
        const webcamContainer = document.getElementById("webcam-container");
        webcamContainer.innerHTML = ""; // Limpiar contenedor
        webcamContainer.appendChild(webcam.canvas);

        // Contenedor de predicciones
        labelContainer = document.getElementById("label-container");
        labelContainer.innerHTML = ""; // Limpiar contenedor
        for (let i = 0; i < maxPredictions; i++) {
            const predictionDiv = document.createElement("div");
            predictionDiv.className = "prediction-item";
            labelContainer.appendChild(predictionDiv);
        }

        // Iniciar loop de predicción
        window.requestAnimationFrame(loop);
    } catch (error) {
        console.error("Error al inicializar:", error);
        alert("Error al cargar el modelo. Verifica la URL del modelo.");
    }
}

// Loop principal
async function loop() {
    webcam.update();
    await predict();
    window.requestAnimationFrame(loop);
}

// Predicción en tiempo real
async function predict() {
    try {
        const prediction = await model.predict(webcam.canvas);
        
        prediction.forEach((pred, i) => {
            const classPrediction = 
                `${pred.className}: ${(pred.probability * 100).toFixed(1)}%`;
            
            if (!labelContainer.children[i]) {
                const newDiv = document.createElement("div");
                labelContainer.appendChild(newDiv);
            }
            
            labelContainer.children[i].textContent = classPrediction;
        });
    } catch (error) {
        console.error("Error en predicción:", error);
    }
}

// Función para mostrar ocultar pestañas
function showTab(tabId) {
    // Ocultar todas las pestañas
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Mostrar la pestaña seleccionada
    document.getElementById(tabId).classList.add('active');

    // Actualizar estilo de los botones
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}