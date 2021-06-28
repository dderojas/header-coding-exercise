import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/*for react router functionality */}
      {typeof window === 'undefined' ? null : <Component {...pageProps} />}
    </div>
  )    
}

export default MyApp
