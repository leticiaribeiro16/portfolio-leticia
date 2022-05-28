function Conteudo(){
    return(
        <div className="container-conteudo">
            <div className='conteudo'>
              <div className='card pythonbot'>
                <h3>Python Bot Whatsapp</h3>
                <span>This bot is in its beta version to be able to send instant messages on Whatsapp!</span>
                <form action="https://github.com/leticiaribeiro16/Bot_WHATSAPP">
                  <button type="submit">Learn More</button>
                </form>
              </div>
              <div className='card buscador'>
                <h3>Zip Code Search</h3>
                <span>This is a zip code lookup in case you need to know information about where you live.</span>
                <form action="https://github.com/leticiaribeiro16/buscador-de-cep">
                  <button type="submit">Learn More</button>
                </form>
              </div>
              <div className='card about'>
                <h3>Project AQW</h3>
                <span>Intended for the Brazilian community of the game "Adventure Quest World", I made this website (which is being updated) with the intention of being a guide for low, medium and high level players.</span>
                <form action="https://github.com/leticiaribeiro16/Project-AQW">
                  <button type="submit">Learn More</button>
                </form>
              </div>
          </div>
        </div>
    )
}

export default Conteudo;