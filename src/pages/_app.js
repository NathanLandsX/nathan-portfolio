import { AnimatePresence } from 'framer-motion'
import Layout from '../components/Layouts/Main'
import '../styles/global.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout router={router}>
      <AnimatePresence
        exitBeforeEnter
        initial={true}
        onExitComplete={() => {
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0 })
          }
        }}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp
