import React, { Component } from 'react';

const shoes = [{
  "name": "adidas Yeezy Boost 350 V2 Cream/Triple White",
  "img": "https://stockx.imgix.net/Adidas-Yeezy-Boost-350-V2-Cream-White-1-1.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2",
  "brand": "adidas",
  "style": "style1",
  "size": "size1",
  "id": 1
}, {
  "name": "adidas Yeezy Wave Runner 700 Solid Grey",
  "img": "https://stockx.imgix.net/Adidas-Yeezy-Wave-Runner-700-Solid-Grey-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2",
  "brand": "adidas",
  "style": "style2",
  "size": "size2",
  "id": 2
}, {
  "name": "adidas NMD Hu Pharrell x Billionaire Boys Club Multi-Color",
  "img": "https://stockx.imgix.net/adidas-NMD-Hu-Pharrell-x-Billionaire-Boys-Club-Multi-Color.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2",
  "brand": "adidas",
  "style": "style3",
  "size": "size3",
  "id": 3
}, {
  "name": "Jordan 1 Retro High Pine Green",
  "img": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Pine-Green-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2",
  "brand": "Jordan",
  "style": "style4",
  "size": "size4",
  "id": 4
}, {
  "name": "Kyrie 4 Lucky Charms",
  "img": "https://stockx.imgix.net/Nike-Kyrie-4-Lucky-Charms-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&q=90&dpr=2&trim=color",
  "brand": "Nike",
  "style": "style5",
  "size": "size5",
  "id": 5
}, {
  "name": "Jordan XXX1 Low Camo",
  "img": "https://stockx.imgix.net/Air-Jordan-XXX1-Low-Camo.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&q=90&dpr=2&trim=color",
  "brand": "Jordan",
  "style": "style6",
  "size": "size6",
  "id": 6
}, {
  "name": "Vans Sk8-Hi Odd Future Donut",
  "img": "https://stockx.imgix.net/Vans-OG-Sk8-Hi-Odd-Future-Donut.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2",
  "brand": "Vans",
  "style": "style7",
  "size": "size7",
  "id": 7
}, {
  "name": "adidas Nemeziz Tango 17 Ultra Boost Triple Black",
  "img": "https://stockx.imgix.net/Adidas-Nemeziz-Tango-17-Ultra-Boost-Triple-Black.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2",
  "brand": "adidas",
  "style": "style8",
  "size": "size8",
  "id": 8
}, {
  "name": "Air Foamposite One Supreme Black",
  "img": "https://stockx.imgix.net/Air-Foamposite-One-Supreme-NYC-Black.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2",
  "brand": "Nike",
  "style": "style9",
  "size": "size9",
  "id": 9
}, {
  "name": "adidas Ultra Boost 1.0 SNS X Social Status",
  "img": "https://stockx.imgix.net/Adidas-Ultra-Boost-Sneakersnstuff-Social-Status.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2",
  "brand": "adidas",
  "style": "style10",
  "size": "size10",
  "id": 10
}, {
  "name": "Jordan 3 Retro Black Cement (2011)",
  "img": "https://stockx.imgix.net/Air-Jordan-3-Retro-Black-Cement-2011.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2",
  "brand": "Jordan",
  "style": "style11",
  "size": "size11",
  "id": 11
}, {
  "name": "LeBron 15 Lifestyle KITH Stained Glass",
  "img": "https://stockx.imgix.net/Nike-LeBron-15-Lifestyle-KITH-Stained-Glass.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2",
  "brand": "Nike",
  "style": "style12",
  "size": "size12",
  "id": 12
}, {
  "name": "ACE 16 PureControl Ultra Boost Kith Flamingos",
  "img": "https://stockx.imgix.net/Adidas-ACE16-Ultra-Boost-Kith-Vapor-Pink.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2",
  "brand": "Ace",
  "style": "style13",
  "size": "size13",
  "id": 13
}, {
  "name": "Air Max 97 Country Camo (USA)",
  "img": "https://stockx.imgix.net/Nike-Air-Max-97-Country-Camo-USA.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2",
  "brand": "Nike",
  "style": "style14",
  "size": "size14",
  "id": 14
}, {
  "name": "adidas Ultra Boost Mid Ronnie Fieg",
  "img": "https://stockx.imgix.net/Adidas-Ultra-Boost-Mid-Ronnie-Fieg-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2",
  "brand": "adidas",
  "style": "style15",
  "size": "size15",
  "id": 15
}, {
  "name": "Air More Uptempo Supreme 'Suptempo' Gold",
  "img": "https://stockx.imgix.net/Nike-Air-More-Uptempo-Supreme-Gold-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2",
  "brand": "Nike",
  "style": "style16",
  "size": "size16",
  "id": 16
}, {
  "name": "adidas Yeezy Boost 750 Light Grey Glow In the Dark",
  "img": "https://stockx.imgix.net/Adidas-Yeezy-Boost-750-Glow-In-The-Dark.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2",
  "brand": "adidas",
  "style": "style17",
  "size": "size17",
  "id": 17
}, {
  "name": "Air Max 97 Ultra 17 Skepta",
  "img": "https://stockx.imgix.net/Nike-Air-Max-97-Ultra-17-Skepta-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2",
  "brand": "Nike",
  "style": "style18",
  "size": "size18",
  "id": 18
}, {
  "name": "Jordan 6 Retro Gatorade Green",
  "img": "https://stockx.imgix.net/Air-Jordan-6-Retro-Gatorade-Green-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2",
  "brand": "Jordan",
  "style": "style19",
  "size": "size19",
  "id": 19
}, {
  "name": "Jordan 6 Retro Infrared Black (2014)",
  "img": "https://stockx.imgix.net/Air-Jordan-6-Retro-Infrared-Black-2014.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2",
  "brand": "Jordan",
  "style": "style20",
  "size": "size20",
  "id": 20
}, {
  "name": "adidas NMD XR1 OG Black",
  "img": "https://stockx.imgix.net/Adidas-NMD-XR1-OG-Black.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2",
  "brand": "adidas",
  "style": "style21",
  "size": "size21",
  "id": 21
}, {
  "name": "Air Max 1 Atmos Animal Pack (2007)",
  "img": "https://stockx.imgix.net/Nike-Air-Max-1-Atmos-Animal-Pack-2007.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&q=90&dpr=2&trim=color",
  "brand": "Nike",
  "style": "style22",
  "size": "size22",
  "id": 22
}, {
  "name": "Air Max 270 Bowfin Black Atomic Violet Amarillo",
  "img": "https://stockx.imgix.net/Nike-Air-Max-270-Bowfin-Black-Atomic-Violet-Amarillo.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2",
  "brand": "Nike",
  "style": "style23",
  "size": "size23",
  "id": 23
}, {
  "name": "LeBron 9 Low Entourage",
  "img": "https://stockx.imgix.net/Nike-LeBron-9-Low-Entourage.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2",
  "brand": "Nike",
  "style": "style24",
  "size": "size24",
  "id": 24
}, {
  "name": "Air Max 1 Curry Pack (Red)",
  "img": "https://stockx.imgix.net/Nike-Air-Max-1-Curry-Pack-Red-Product.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&q=90&dpr=2&trim=color",
  "brand": "Nike",
  "style": "style25",
  "size": "size25",
  "id": 25
}]

export default shoes;
