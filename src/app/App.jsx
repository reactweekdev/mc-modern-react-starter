import { Header } from './common/Header'
import { Footer } from './common/Footer'
import Main from './Main'
import AuthProvider from './AuthProvider'

const App = () => (
    <AuthProvider>
        <Header />
        <Main />
        <Footer />
    </AuthProvider>
)

export default App
