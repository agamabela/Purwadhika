// import axios from "axios";

// export const authLogin = (email, password) => {
//   return (dispatch) => {
//     // fungsi untuk get data ke API
//     axios
//       .get(`localhost:2022/users?email=${email}&password=${password}`)
//       .then((res) => {
//         localStorage.setItem("tkn_id", res.data[0].id);
//         // menyimpan data ke reducer
//         dispatch({
//           type: "LOGIN_SUCCESS",
//           payload: res.data[0],
//         });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };

export const authLogin = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};

export const authLogout = () => {
  localStorage.removeItem("tkn_id");
  return {
    type: "LOGOUT",
  };
};

export const keepLogin = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};

export const updateCart = (data) => {
  console.log("cart qty", data);
  return {
    type: "UPDATE_CART",
    payload: data,
  };
};
