import Body from "./Body";
const Products = () => {
  const menu = [
    {
      id: 1,
      title: "Chicken Crispy",
      price: 150,
    },
    {
      id: 2,
      title: "Chicken Tandoori",
      price: 250,
    },
    {
      id: 3,
      title: "Apple Chicken",
      price: 170,
    },
    {
      id: 4,
      title: "Chicken Dry",
      price: 140,
    },
    {
      id: 5,
      title: "Chicken Chilly",
      price: 160,
    },
    {
      id: 6,
      title: "Chicken Kebab",
      price: 200,
    },
  ];
  return (
    <div>
      <h1 style={{ color: "#1ad1b9" }}>Menu</h1>
      <ul style={{ listStyle: "none" }}>
        {menu.map((product) => (
          <Body
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
          />
        ))}
      </ul>
    </div>
  );
};
export default Products;
