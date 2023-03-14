export const selectIsLogin = state => state.auth.isLogin;
export const getAuth = ({ auth }) => {
  const { isLogin, token } = auth;
  return { isLogin, token };
};
export const selectUser = state => state.auth.user;
