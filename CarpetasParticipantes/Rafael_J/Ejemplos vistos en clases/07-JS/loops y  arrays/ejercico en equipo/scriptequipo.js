const productos = ["Jabon facial piel delicada", "Crema hidratante facial (día)", "Crema hidratante (noche)", "Protector solar", "Desodorante", "Bálsamo para labios", "Shampoo para cabello liso", "Shampoo para cabello rizado", "Crema corporal", "Shampoo corporal", "Rimel", "Delineador", "Sombra para ojos", "Tónico facial", "Mascarilla de noche", "Set de Maquillaje", "Crema corporal piel seca", "Crema corporal piel grasa", "Jabon", "Exfoliante", "Desodorante", "Iluminador", "Base", "Aceite para cabello", "Peeling de rostro"];
console.log(productos.length)


function imprimirCatalogo(){
    const catalogo = document.getElementById("contenedorCards");
    productos.forEach(i=>{
        console.log(i);// creamos una constante para un div.
        const divCard = document.createElement("div");
        divCard.classList.add("card");

        divCard.innerHTML = `
            <div class = "card-body">
                <h4 class = "card-title">${i}</h4>
            </div>`
        catalogo.appendChild(divCard);
    })
}
imprimirCatalogo();
