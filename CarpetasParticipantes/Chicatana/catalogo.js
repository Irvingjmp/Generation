var items = [
    ['Logitek', 'Rp 60.000,00', 'Logitek Keyboard', 'cafe.jpg'],
    ['MSI', 'Rp 300.000,00', 'MSI Keyboard', 'muñeca.jpg'],
    ['Genius', 'Rp 50.000,00', 'Genius Mouse', 'miel.jpg'],
    ['Jerry', 'Rp 30.000,00', 'Jerry Mouse', 'ropa.jpg']
  ]
  
  let content = '';
  
  items.forEach(p => {
    content += `
      <div id="keyBoard" class="col-md-4 mt-2">
                <div class="card" style="width: 18rem;">
                    <img src="${p[3]}" class="card-img-top img-fluid" alt="keyboard">
                    <div class="card-body">
                        <h5 class="card-title" id="itemName">${p[0]}</h5>
                        <p class="card-text" id="itemDesc">${p[2]}</p>
                        <p class="card-text">${p[1]}</p>
                        <a href="#" class="btn btn-primary" id="addCart">Add to cart</a>
                    </div>
                </div>
            </div>
    `
  });
  
  document.querySelector("#shop").innerHTML = content;