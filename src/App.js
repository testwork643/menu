import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { FaShoppingCart, FaTrash } from "react-icons/fa";

const WHATSAPP_PHONE_NUMBER = "971547471046";

const CATEGORIES = [
  { id: "pizza", name: { ar: "بيتزا", en: "Pizza" } },
  { id: "burger", name: { ar: "برجر", en: "Burger" } },
  { id: "shawarma", name: { ar: "شاورما", en: "Shawarma" } },
  { id: "drinks", name: { ar: "مشروبات", en: "Drinks" } },
  { id: "sides", name: { ar: "مقبلات", en: "Sides" } },
];

const PRODUCTS = [
  // Pizza
  {
    id: 1,
    category: "pizza",
    name: { en: "Margherita Pizza", ar: "بيتزا مارجريتا" },
    price: 25,
    imageUrl:
      "https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg",
  },
  {
    id: 2,
    category: "pizza",
    name: { en: "Chicken Pizza", ar: "بيتزا دجاج" },
    price: 30,
    imageUrl:
      "https://images.pexels.com/photos/2233348/pexels-photo-2233348.jpeg",
  },
  {
    id: 3,
    category: "pizza",
    name: { en: "Pepperoni Pizza", ar: "بيتزا ببروني" },
    price: 28,
    imageUrl:
      "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
  },
  {
    id: 4,
    category: "pizza",
    name: { en: "Veggie Pizza", ar: "بيتزا خضار" },
    price: 26,
    imageUrl:
      "https://images.pexels.com/photos/1435899/pexels-photo-1435899.jpeg",
  },
  {
    id: 5,
    category: "pizza",
    name: { en: "Hawaiian Pizza", ar: "بيتزا هاواي" },
    price: 29,
    imageUrl:
      "https://images.pexels.com/photos/159688/pineapple-pizza-italian-pizza-159688.jpeg",
  },
  {
    id: 6,
    category: "pizza",
    name: { en: "BBQ Chicken Pizza", ar: "بيتزا دجاج باربكيو" },
    price: 32,
    imageUrl:
      "https://images.pexels.com/photos/1435900/pexels-photo-1435900.jpeg",
  },

  // Burger
  {
    id: 7,
    category: "burger",
    name: { en: "Cheese Burger", ar: "برجر جبنة" },
    price: 22,
    imageUrl:
      "https://images.pexels.com/photos/1639563/pexels-photo-1639563.jpeg",
  },
  {
    id: 8,
    category: "burger",
    name: { en: "Double Beef Burger", ar: "برجر لحم دوبل" },
    price: 28,
    imageUrl:
      "https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg",
  },
  {
    id: 9,
    category: "burger",
    name: { en: "Chicken Burger", ar: "برجر دجاج" },
    price: 24,
    imageUrl:
      "https://images.pexels.com/photos/1639564/pexels-photo-1639564.jpeg",
  },
  {
    id: 10,
    category: "burger",
    name: { en: "Veggie Burger", ar: "برجر نباتي" },
    price: 23,
    imageUrl:
      "https://images.pexels.com/photos/374870/pexels-photo-374870.jpeg",
  },
  {
    id: 11,
    category: "burger",
    name: { en: "Bacon Burger", ar: "برجر بيكون" },
    price: 30,
    imageUrl:
      "https://images.pexels.com/photos/260471/pexels-photo-260471.jpeg",
  },

  // Shawarma
  {
    id: 12,
    category: "shawarma",
    name: { en: "Chicken Shawarma", ar: "شاورما دجاج" },
    price: 18,
    imageUrl:
      "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg",
  },
  {
    id: 13,
    category: "shawarma",
    name: { en: "Beef Shawarma", ar: "شاورما لحم" },
    price: 20,
    imageUrl:
      "https://images.pexels.com/photos/374515/pexels-photo-374515.jpeg",
  },
  {
    id: 14,
    category: "shawarma",
    name: { en: "Mixed Shawarma", ar: "شاورما مشكل" },
    price: 22,
    imageUrl:
      "https://images.pexels.com/photos/716397/pexels-photo-716397.jpeg",
  },
  {
    id: 15,
    category: "shawarma",
    name: { en: "Turkey Shawarma", ar: "شاورما تركي" },
    price: 21,
    imageUrl:
      "https://images.pexels.com/photos/636170/pexels-photo-636170.jpeg",
  },
  {
    id: 16,
    category: "shawarma",
    name: { en: "Falafel Shawarma", ar: "شاورما فلافل" },
    price: 17,
    imageUrl:
      "https://images.pexels.com/photos/3157551/pexels-photo-3157551.jpeg",
  },

  // Drinks
  {
    id: 17,
    category: "drinks",
    name: { en: "Cola", ar: "كولا" },
    price: 5,
    imageUrl:
      "https://images.pexels.com/photos/678236/pexels-photo-678236.jpeg",
  },
  {
    id: 18,
    category: "drinks",
    name: { en: "Orange Juice", ar: "عصير برتقال" },
    price: 7,
    imageUrl: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg",
  },
  {
    id: 19,
    category: "drinks",
    name: { en: "Water Bottle", ar: "ماء" },
    price: 3,
    imageUrl:
      "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg",
  },
  {
    id: 20,
    category: "drinks",
    name: { en: "Lemonade", ar: "ليمونادة" },
    price: 6,
    imageUrl:
      "https://images.pexels.com/photos/1630974/pexels-photo-1630974.jpeg",
  },
  {
    id: 21,
    category: "drinks",
    name: { en: "Iced Tea", ar: "شاي مثلج" },
    price: 6,
    imageUrl:
      "https://images.pexels.com/photos/1420708/pexels-photo-1420708.jpeg",
  },

  // Sides
  {
    id: 22,
    category: "sides",
    name: { en: "French Fries", ar: "بطاطس مقلية" },
    price: 10,
    imageUrl:
      "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg",
  },
  {
    id: 23,
    category: "sides",
    name: { en: "Onion Rings", ar: "حلقات بصل" },
    price: 12,
    imageUrl: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
  },
  {
    id: 24,
    category: "sides",
    name: { en: "Chicken Nuggets", ar: "قطع دجاج مقلية" },
    price: 15,
    imageUrl:
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
  },
  {
    id: 25,
    category: "sides",
    name: { en: "Garlic Bread", ar: "خبز بالثوم" },
    price: 8,
    imageUrl:
      "https://images.pexels.com/photos/3157550/pexels-photo-3157550.jpeg",
  },
  {
    id: 26,
    category: "sides",
    name: { en: "Caesar Salad", ar: "سلطة سيزر" },
    price: 20,
    imageUrl:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  },
];

const translations = {
  headerTitle: { en: "Quick Eats", ar: "مطعمك" },
  viewCart: { en: "View Cart", ar: "عرض السلة" },
  add: { en: "Add", ar: "إضافة" },
  currency: { en: "AED", ar: "درهم" },
  cart: { en: "Cart", ar: "السلة" },
  orderNow: { en: "Order via WhatsApp", ar: "اطلب عبر واتساب" },
  emptyCart: { en: "Cart is empty", ar: "السلة فارغة" },
  total: { en: "Total", ar: "الإجمالي" },
  clearCart: { en: "Clear Cart", ar: "إفراغ السلة" },
};

const CartContext = createContext();
const LanguageContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCartItems(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = useCallback((product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, qty) => {
    if (qty <= 0) return removeFromCart(id);
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    );
  };

  const clearCart = () => setCartItems([]);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("ar");
  const value = useMemo(() => {
    const t = (key) => translations[key]?.[language] || key;
    return { language, setLanguage, t };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

function Header({ onCartClick }) {
  const { t, language, setLanguage } = useContext(LanguageContext);
  const { cartItems } = useContext(CartContext);
  return (
    <header className="bg-white p-4 shadow mb-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">{t("headerTitle")}</h1>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setLanguage(language === "en" ? "ar" : "en")}
          className="text-blue-600"
        >
          {language === "ar" ? "English" : "العربية"}
        </button>
        <button onClick={onCartClick} className="relative">
          <FaShoppingCart className="text-2xl" />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}

function Categories({ selected, onSelect }) {
  const { language } = useContext(LanguageContext);
  return (
    <div className="flex gap-3 overflow-x-auto mb-4 pb-2">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`px-3 py-1 border rounded ${
            selected === cat.id ? "bg-orange-500 text-white" : ""
          }`}
        >
          {cat.name[language]}
        </button>
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const { t, language } = useContext(LanguageContext);

  return (
    <div className="bg-white p-3 rounded shadow">
      <img
        src={product.imageUrl}
        alt=""
        className="w-full h-32 object-cover rounded mb-2"
      />
      <h3 className="font-bold">{product.name[language]}</h3>
      <div className="flex justify-between items-center mt-2">
        <span>
          {product.price} {t("currency")}
        </span>
        <button
          onClick={() => addToCart(product)}
          className="bg-orange-500 text-white px-2 py-1 rounded"
        >
          {t("add")}
        </button>
      </div>
    </div>
  );
}

function ProductList({ selectedCategory }) {
  const filtered = PRODUCTS.filter((p) => p.category === selectedCategory);
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      {filtered.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function Cart({ onClose }) {
  const { cartItems, totalPrice, updateQuantity, removeFromCart, clearCart } =
    useContext(CartContext);
  const { t, language } = useContext(LanguageContext);

  const handleOrder = () => {
    if (cartItems.length === 0) return alert(t("emptyCart"));
    const message =
      `مرحباً مطعمك! أود طلب التالي:\n\n` +
      cartItems
        .map(
          (item) =>
            `${item.name[language]} (الكمية: ${item.quantity}) - ${
              item.price * item.quantity
            } ${t("currency")}`
        )
        .join("\n") +
      `\n\n${t("total")}: ${totalPrice} ${t("currency")}\n\nشكراً لكم!`;
    const url = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="mt-4 bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold mb-3">{t("cart")}</h2>
      {cartItems.length === 0 ? (
        <p>{t("emptyCart")}</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-2 border-b py-2"
            >
              <img src={item.imageUrl} alt="" className="w-12 h-12 rounded" />
              <div className="flex-1">
                <p className="font-bold">{item.name[language]}</p>
                <p className="text-sm text-gray-600">
                  {item.price} × {item.quantity} = {item.price * item.quantity}{" "}
                  {t("currency")}
                </p>
              </div>
              <div className="flex gap-1 items-center">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 bg-gray-200"
                >
                  -
                </button>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 bg-gray-200"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between font-bold mt-2">
            <span>{t("total")}</span>
            <span>
              {totalPrice} {t("currency")}
            </span>
          </div>
          <div className="flex gap-2 mt-4">
            <button
              onClick={handleOrder}
              className="bg-green-600 text-white w-full py-2 rounded"
            >
              {t("orderNow")}
            </button>
            <button
              onClick={clearCart}
              className="bg-red-600 text-white px-3 rounded"
            >
              {t("clearCart")}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("pizza");
  const [showCart, setShowCart] = useState(false);

  return (
    <LanguageProvider>
      <CartProvider>
        <div className="bg-gray-100 min-h-screen p-4">
          <Header onCartClick={() => setShowCart(true)} />
          <Categories
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
          <ProductList selectedCategory={selectedCategory} />
          {showCart && <Cart onClose={() => setShowCart(false)} />}
        </div>
      </CartProvider>
    </LanguageProvider>
  );
}
