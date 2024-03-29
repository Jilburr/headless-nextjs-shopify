import "../styles/globals.css";
import Layout from "../components/Layout";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import ShopProvider from "../context/shopContext";
import { useRouter } from "next/router";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <ShopProvider>
      <Layout>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </ShopProvider>
  );
}

export default MyApp;
