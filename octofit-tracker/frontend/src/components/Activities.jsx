import Activities from './Activities.tsx';

const CODESPACE_ACTIVITIES_URL = `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities`;

export { CODESPACE_ACTIVITIES_URL };
export default Activities;
