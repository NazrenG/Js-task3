/*Tapşırıq: JavaScript vasitəsilə interfeys elementlərinin yaradılması
Bu təlimatda, JavaScript istifadə edərək müxtəlif interfeys elementləri yaratmaq üçün bir sıra
funksiyalar yaradacaqsınız. Hər bir funksiya müəyyən parametrlərlə növünə uyğun element
yaradacaq və onu bir DOM elementi kimi qaytaracaq.
Məhsul kartı yaradılması:
createProductCard adlı funksiyanı yaradın. Bu funksiya aşağıdakı parametrləri qəbul
etməlidir:
● productName: məhsulun adı olan string.
● price: məhsulun qiyməti olan string.
● imageUrl: məhsulun şəklinin URL'i olan string.
Funksiya məhsul kartı yaratmalıdır ki, məhsulun şəklini, adını və qiymətini göstərən bir kart
və DOM elementi kimi qaytaracaqdır. */
function createProductCard(productName, price, imageUrl) {
  const card = document.createElement("div");
  card.classList.add("product-card");

  const image = document.createElement("img");
  image.src = imageUrl;
  image.alt = productName + " image";
  card.appendChild(image);

  const name = document.createElement("h2");
  name.textContent = productName;
  card.appendChild(name);

  const priceTag = document.createElement("p");
  priceTag.textContent = "Price: " + price;
  card.appendChild(priceTag);

  return card;
}

const productCard = createProductCard(
  "Iphone 12",
  "$999",
  "https://cdn.dsmcdn.com/mnresize/500/-/ty111/product/media/images/20210505/19/86119594/171406043/0/0_org.jpg"
);
document.body.appendChild(productCard);

/*Şərh mesajının yaradılması:
createCommentMessage adlı funksiyanı yaradın. Bu funksiya aşağıdakı parametrləri qəbul
etməlidir:
● author: şərh yazarının adı olan string.
● message: şərh mətni olan string.
● timestamp: şərh vaxt damğası olan string.
Funksiya şərh mesajını yaratmalıdır ki, müəllifin adını, şərh mətnini və vaxt damğasını
göstərən bir mesaj və DOM elementi kimi qaytaracaqdır. */

function createCommentMessage(author, message, timestamp) {
  const commentMessage = document.createElement("div");
  commentMessage.classList.add("comment-div");

  const messageAuthor = document.createElement("h2");
  messageAuthor.textContent = "Author: " + author;
  commentMessage.append(messageAuthor);

  const messages = document.createElement("p");
  messages.textContent = "Message: " + message;
  commentMessage.append(messages);

  const time = document.createElement("p");
  time.textContent = "Time Stamp: " + timestamp;
  commentMessage.append(time);

  return commentMessage;
}

let comment = createCommentMessage("John", "Hello!", Date());
document.body.append(comment);

/*
Menyu elementinin yaradılması:
createMenuItem adlı funksiyanı yaradın. Bu funksiya aşağıdakı parametrləri qəbul etməlidir:
● name: menyuda yeməyin adı olan string.
● price: yeməyin qiyməti olan string.
● description: yeməyin təsviri olan string.
Funksiya menyuda yeməyin adını, qiymətini və təsvirini göstərən bir element və DOM
elementi kimi qaytaracaqdır.
Sizin tapşırığınız bu üç funksiyaları verilmiş parametrlərlə düzgün HTML quruluşunu
yaradaraq həyata keçirməkdir və onları veb-səhifədə interfeys elementləri yaratmaq üçün
istifadə etməkdir. */

function createMenuItem(name, price, description) {
  const menu = document.createElement("div");
  menu.classList.add("menu-items");

  const itemName = document.createElement("h2");
  itemName.textContent = "Name: " + name;
  menu.append(itemName);

  const itemPrice = document.createElement("p");
  itemPrice.textContent = "Price: " + price;
  menu.append(itemPrice);

  const itemDesc = document.createElement("p");
  itemDesc.textContent = "Description: " + description;
  menu.append(itemDesc);
  return menu;
}

let menuProduct = createMenuItem("Salat", "15$", "vegatable");
document.body.append(menuProduct);
