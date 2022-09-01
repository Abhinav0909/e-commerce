export const fetchProducts = () => (dispatch) => {

  fetch("http://localhost:3500/allproducts")
    .then((res) => res.json())
    .catch((err) =>
      fetch("db.json")
        .then((res) => res.json())
        .then((data) => data.products)
    )
    .then((data) => {
      dispatch({ type: "add", payload: data });
    });
};