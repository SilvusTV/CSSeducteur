module.exports = {
  apps: [
    {
      name: 'CSSeducteur', // Nom de l'application
      script: 'npm run dev', // Point d'entrée SSR
      instances: '1', // Utilise tous les cœurs disponibles
      exec_mode: 'cluster',
    },
  ],
};
