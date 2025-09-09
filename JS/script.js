document.addEventListener("DOMContentLoaded", () =>{
    const addToCartButton = document.querySelectorAll('.adicionar-carrinho');
    addToCartButton.forEach(button => {
        button.addEventListener('click', () =>{
            const card = button.closest('.card');
            const productName = card.getAttribute('data-name');
            const productPrice = parseFloat(card.getAttribute('data-price')); 
            const product = {
                name: productName,
                price: productPrice,
            };

            let cart = JSON.parse(localStorage.getItem('cart')) || []
            cart.push(product)

            localStorage.setItem('cart', JSON.stringify(cart));

            alert(`${productName} foi adicionado ao carrinho!`)

        })
    })
    const carditenmscontainer = document.getElementById('card-items-container')
    const cardtotalvalue = document.getElementById('card-total-value')
    const checkoutbtn = document.getElementById('checkout-btn')

    if(carditenmscontainer){
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let total = 0

        if(cart.lenght == 0){

        }else{
            carditenmscontainer.innerHTML = "";
            cart.forEach(product =>{
                const cartitem = document.createElement('div');
                cartitem.classList.add('cart-item');

                cartitem.innerHTML = `
                <span>${product.name}</span>
                <span>R$${product.price.toFixed(2)}</span>
                `;

                carditenmscontainer.appendChild(cartitem);
                total += product.price;

                checkoutbtn.addEventListener('click'), () =>{
                    const numerowhatspp = '5515911111111'
                    let mensagem = "Olá!Segue meu pedido: \n\n"
                    cart.forEach(product => {
                        mensagem += `- ${product.name} (R$ ${product.price.toFixed(2)})`
                    })
                    mensagem += `\n Total:R$${total.toFixed(2)}`

                    const urlwhatsapp = ""
                }
            })
        }
        cardtotalvalue.textContent = `R$ ${total.toFixed(2)}`
    }
    const limpartabela = document.getElementById('limpar-pedido')
    limpartabela.addEventListener('click', ()=>{
        localStorage.removeItem('cart');
        location.reload(true)
    })
})