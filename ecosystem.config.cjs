module.exports = {
  apps: [
    {
      name: 'CSSeducteur', // Nom de l'application
      script: './server.js', // Point d'entrée SSR
      instances: '1', // Utilise tous les cœurs disponibles
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
