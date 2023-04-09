/**
 * extending the ProcessEnv Interface that's accessible under
 * NodeJS namespace and specifying our custom env variables types
 */
namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    PORT: string;
    MONGO_URI: string;
  }
}
