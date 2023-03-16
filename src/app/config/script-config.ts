export const ScriptConfig = {
  loadScripts() {
    const loginModule = document.createElement('script');
    loginModule.src = 'http://localhost:8080/login/main.js';
    document.body.appendChild(loginModule);
  },
};
