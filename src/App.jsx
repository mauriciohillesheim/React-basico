import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'

function App() {
  return (
    <>
      <Header />
      <main class="container">
        
          <List />
          <section class="last">
              <h2>Seção de formulário</h2>
              <form>
                  <div>
                      <label for="name">Nome:</label>
                      <input type="text" id="nome" name="nome" placeholder="Nome completo" required/>
                  </div>
                  <div>
                      <label for="email">Email:</label>
                      <input type="email" name="email" id="email" placeholder="Email completo" required/>
                  </div>
                  <div>
                      <label for="senha">Senha:</label>
                      <input type="password" name="senha" id="senha" placeholder="Senha completo" required/>
                  </div>
                  <button type="submit">Salvar</button>
                  <button type="reset">Limpar</button>
              </form>
          </section>

      </main>
        <Footer />
    </>
    )
}

export default App