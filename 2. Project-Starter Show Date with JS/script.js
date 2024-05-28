
// Función para obtener el nombre del día en español
function getDayName(dayIndex) {
    const days = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
    return days[dayIndex];
}

// Función para obtener el nombre del mes en español
function getMonthName(monthIndex) {
    const months = [
        "enero", "febrero", "marzo", "abril", "mayo", "junio",
        "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
    return months[monthIndex];
}

// Función principal para formatear la fecha
function formatDate(date) {
    const dayName = getDayName(date.getDay());
    const day = date.getDate();
    const monthName = getMonthName(date.getMonth());
    const year = date.getFullYear();
    
    return `${dayName} ${day} ${monthName} ${year}`;
}

// Función para mostrar la fecha formateada en la página
function showFormattedDate() {
    // Obtener la fecha actual
    const today = new Date();

    // Formatear la fecha
    const formattedDate = formatDate(today);

    // Insertar la fecha formateada en el elemento con id "date"
    document.getElementById('date').innerText = formattedDate;
}

// Ejecutar la función cuando la página haya cargado
window.onload = showFormattedDate;