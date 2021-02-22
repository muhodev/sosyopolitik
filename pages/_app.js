import { AuthProvider } from "context";
import "style/index.css";

export default function MyApp({ Component, pageProps }) {
  console.log("deneme");
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
