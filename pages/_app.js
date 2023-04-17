import DefaultLayout from "@/components/layouts/DefaultLayout";
import store from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  // // use when have one global layout
  // return (
  //   <Provider store={store}>
  //     <DefaultLayout>
  //       <Component {...pageProps} />
  //     </DefaultLayout>
  //   </Provider>
  // );

  // use when have one global layout and per page layout, example: admin layout
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <Provider store={store}>
        <DefaultLayout>{page}</DefaultLayout>
      </Provider>
    ));

  return getLayout(<Component {...pageProps} />);
}
