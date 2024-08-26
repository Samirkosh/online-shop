import { useSelector } from "react-redux";
import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { Product } from "./components/Product";

function App() {
  const { isOpenCart } = useSelector((store) => store.myProducts);
  return (
    <div className="app">
      <Header />
      <Product />

      {isOpenCart && <Cart />}
    </div>
  );
}

export default App;
