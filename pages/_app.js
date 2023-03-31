import DefaultLayout from "@/components/layout/DefaultLayout";
import "@/styles/globals.css";
import styleColors from "@/styles/styleColors";

export default function App({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
