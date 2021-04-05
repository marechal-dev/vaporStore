let cart_container = document.getElementById('cart_container')

function showCart() {
  cart_container.classList.remove('disabled_cart')
}

function closeCart() {
  cart_container.classList.add('disabled_cart')
}

function removeFromCart(product) {
  let product_on_cart = document.getElementById('product')
  product_on_cart.remove(product)
} 

// =====================================================================

let products = [
  {
    name: "Camiseta Feline",
    price: 50.00,
    image_url: '../../public/images/productsImages/Feline.png'
  },
  {
    name: "Camiseta Ba-X",
    price: 50.00,
    image_url: '../../public/images/productsImages/ba-x.png'
  },
  {
    name: "Camiseta Enjoy",
    price: 50.00,
    image_url: '../../public/images/productsImages/enjoy.png'
  },
  {
    name: "Camiseta Shiba",
    price: 50.00,
    image_url: '../../public/images/productsImages/shiba.png'
  },
  {
    name: "Moletom Kyoto",
    price: 60.00,
    image_url: '../../public/images/productsImages/kyoto.png'
  },
  {
    name: "Camiseta Macintosh Plus",
    price: 50.00,
    image_url: '../../public/images/productsImages/macintosh.jpg'
  },
  {
    name: "Camiseta Mount Fuji",
    price: 50.00,
    image_url: '../../public/images/productsImages/mount_fuji.png'
  },
  {
    name: "Moleom Non",
    price: 60.00,
    image_url: '../../public/images/productsImages/non.png'
  },
  {
    name: "Camiseta Sega",
    price: 50.00,
    image_url: '../../public/images/productsImages/Sega.png'
  },
  {
    name: "Camiseta Twilight",
    price: 50.00,
    image_url: '../../public/images/productsImages/twilight.png'
  }
]


let cart = {
  items: [],
  total_price: 0.00
}

// =======================================================================
