
function About(){
    return(
        <div className='container'>
          <div className='about-single'>
              <h1>About me</h1>
          </div>
        <div className='center'>
          <div className='conteudo-single'>
            <h3 className='text-title-about-me'>My name is <span>Maria Letícia Bandeira Ribeiro</span></h3>
            <p>I have always been fascinated by the area of ​​web development and systems. Studying "Infoweb" at the Federal Institute of Science and Technology of Rio Grande do Norte. Focus on mobile development, with the prospect of expanding technological knowledge in the area.</p>
          </div>
          <div className='conteudo-single'>
            <h3 className="text-title-about"><span>E-mail</span></h3>
            <p>leticiaribeirocontact@gmail.com</p>
            <h3 className="text-title-about"><span>GitHub</span></h3>
            <p><a href="https://github.com/leticiaribeiro16">leticiaribeiro16</a></p>
            <h3 className="text-title-about"><span>Linkedin</span></h3>
            <p><a href="https://www.linkedin.com/in/maria-l-18a856211/">Maria Letícia</a></p>
          </div>
        </div>
      </div>
    )
}

export default About;