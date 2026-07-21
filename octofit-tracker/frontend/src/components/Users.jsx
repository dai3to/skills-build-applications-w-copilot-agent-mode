import Users from './Users.tsx';

const CODESPACE_USERS_URL = `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users`;

export { CODESPACE_USERS_URL };
export default Users;
