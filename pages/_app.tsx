import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Unbounded, Quicksand,Gruppo} from '@next/font/google'

const unbounded = Unbounded({
  subsets: ['latin'],
  variable: '--font-unbounded'
})

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand'
})

const gruppo = Gruppo({
  weight: "400",
  subsets: ['latin'],
  variable: '--font-gruppo'
})


function MyApp({ Component, pageProps }: AppProps) {
  return <main className={`${quicksand.variable} ${unbounded.variable}  ${gruppo.variable}`}>
     <Component {...pageProps} />
  </main>
}

export default MyApp
