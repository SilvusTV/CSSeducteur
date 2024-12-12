module.exports = {
  apps: [
    {
      name: 'CSSeducteur', // Nom de l'application
      script: 'npm', // Point d'entrée SSR
      args: 'run preview', // Arguments du script
      instances: '1', // Utilise tous les cœurs disponibles
      exec_mode: 'cluster',
    },
  ],
};
