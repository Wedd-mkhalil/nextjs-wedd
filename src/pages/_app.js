import "../styles/globals.css";
import { GuestProvider } from "../context/GuestContext";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <GuestProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GuestProvider>
  );
}
