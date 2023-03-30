import React, { useState } from "react";
import useProducts from "../../hooks/use-products";

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [loaded, error, products] = useProducts({ onlySales: checked });
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  if (loaded) return <p>로딩중...</p>;
  if (error) return <p>에러가 발생...!</p>;

  return (
    <>
      <input
        id="checkbox"
        type="checkbox"
        value={checked}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">🔥Sale Only</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
