import { AuthProvider } from "context";
import "style/main.css";

export default function Sosyopolitik({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
