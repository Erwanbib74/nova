import ContextProvider from "utils/ContextProvider";

const App =  ({ Component, pageProps }) => {
  return (
    <ContextProvider> 
      <Component {...pageProps} />
    </ContextProvider>
  );
};


export default App;