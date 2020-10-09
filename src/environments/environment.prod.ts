export const environment = {
  production: true,
  appShellConfig: {
    debug: false,
    networkDelay: 0
    // We wait on purpose 1 or 2 secs on local environment when fetching from json to simulate the backend roundtrip.
    // However, in production you should set this delay to 0 in the environment.prod file.
  }
};
