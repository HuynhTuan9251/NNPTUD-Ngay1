
 // Câu 1

function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
  }
  
// Câu 2
  const products = [
    new Product(1, "Laptop Gaming", 35000000, 5, "Electronics", true),
    new Product(2, "iPhone 15", 30000000, 0, "Electronics", true),
    new Product(3, "Wireless Mouse", 800000, 20, "Accessories", true),
    new Product(4, "Keyboard Mechanical", 1500000, 10, "Accessories", true),
    new Product(5, "Monitor 27 inch", 7000000, 3, "Electronics", false),
    new Product(6, "USB-C Hub", 1200000, 0, "Accessories", false),
  ];

  console.log("Câu 2 : Danh sách sản phẩm:", products);

  
// Câu 3
  const nameAndPrice = products.map(product => ({
    name: product.name,
    price: product.price
  }));
  
  console.log("Câu 3:", nameAndPrice);
  
 // Câu 4
  const inStockProducts = products.filter(product => product.quantity > 0);
  console.log("Câu 4:", inStockProducts);
  
// Câu 5
  const hasExpensiveProduct = products.some(product => product.price > 30000000);
  console.log("Câu 5:", hasExpensiveProduct);
  
// Câu 6
  const allAccessoriesAvailable = products
    .filter(product => product.category === "Accessories")
    .every(product => product.isAvailable === true);
  
  console.log("Câu 6:", allAccessoriesAvailable);
  
// Câu 7
  const totalInventoryValue = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  
  console.log("Câu 7:", totalInventoryValue);
  
// Câu 8
  console.log("Câu 8:");
  for (const product of products) {
    const status = product.isAvailable ? "Đang bán" : "Ngừng bán";
    console.log(`${product.name} - ${product.category} - ${status}`);
  }
  
// Câu 9
  console.log("Câu 9:");
  const sampleProduct = products[0];
  
  for (const key in sampleProduct) {
    console.log(`${key}: ${sampleProduct[key]}`);
  }
  
// Câu 10
  const availableAndInStockNames = products
    .filter(product => product.isAvailable === true && product.quantity > 0)
    .map(product => product.name);
  
  console.log("Câu 10:", availableAndInStockNames);
  