import ThemeStore from '../stores/ThemeStore';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeStore>
        <Component {...pageProps} />
      </ThemeStore>
    </>
  )
}

export default MyApp
