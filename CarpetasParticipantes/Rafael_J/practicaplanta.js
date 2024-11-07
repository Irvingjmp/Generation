// 1 de noviembre

// si cierto dia y hora son dias laborales estandar

// de lunes a viernes son dias laborales
// de 8 am a 4 pm son horas laborales
// sabados y domingos NO son dias laborales
// cualquier horario que no sea de 8 a 4 no es horario laboral

const fecha = new Date("2025-01-01"); // Crea una fecha específica
const diaSemana = fecha.getDay();
const diaMes = fecha.getDate();

console.log(diaMes);