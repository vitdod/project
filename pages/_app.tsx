import { appWithTranslation, SSRConfig } from 'next-i18next'
import type { AppProps } from 'next/app'
import '../styles/app.css'
import { Provider } from '../UI/Components/Provider'
import MainLayout from '../UI/Layouts/MainLayout'

const MyApp = ({ Component, pageProps }: AppProps<SSRConfig>) => {
  return (
    <Provider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  )
}
export default appWithTranslation(MyApp)
