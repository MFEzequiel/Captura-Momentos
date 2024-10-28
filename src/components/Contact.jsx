

export function Contact () {
  return (
  <>
    <div className="contact-form">
      <div className="container-register">
        <p className='filterable-title pos-relative'>
          <span className='filterable-title-text title'>CONTACTANOS</span>
        </p> 
        <p className="paragraph">Nos encantaría ayudarte a capturar tus momentos especiales.</p>
        <p className="paragraph">Completa el siguiente formulario de reserva y nos pondremos en contacto contigo para personalizar tu sesión y definir los detalles.</p>
        <p className="paragraph">Nuestro equipo de atención está disponible para responder cualquier pregunta o brindarte asesoría sobre el tipo de sesión que mejor se adapte a tus necesidades.</p>
        <div className="container-form">
          <form className='form-contact'>
            <label className='form-contact-label'>
              Nombre
              <input className='form-contact-input' type='text' placeholder='Ezequiel' />
            </label>
            <label className='form-contact-label'>
              Email
              <input
                className='form-contact-input'
                type='email'
                placeholder='example@gmail.com'
              />
            </label>
            <label className='form-contact-label'>
              Mensaje
              <textarea
                className='form-contact-messeger'
                name='mensaje'
                cols='30'
                rows='9'
                placeholder='mensaje...'
              ></textarea>
            </label>
            <button className="form-button" >Enviar</button>
          </form>
        </div>
      </div>
      <div className="ubication">
        <p className='filterable-title pos-relative'>
          <span className='filterable-title-text title'>Ubicación del estudio</span>
        </p> 
        <p className="paragraph">Nos encontrarás en Neuquen 718, en un lugar céntrico y de fácil acceso</p>
        <p className="paragraph">Nuestro estudio cuenta con cómodas instalaciones donde podrás disfrutar de un ambiente relajado y profesional, ideal para cualquier tipo de sesión fotográfica.</p>
        <p className="paragraph">Contamos con estacionamiento disponible para facilitar tu visita</p>
      </div>
      <div className="redes container-register">
        <p className='filterable-title pos-relative'>
          <span className='filterable-title-text title'>Redes sociales</span>
        </p>
        <p className="paragraph">Únete a nuestra comunidad en redes sociales para ver nuestras últimas sesiones, enterarte de novedades y promociones, e inspirarte con historias y fotos únicas.</p>
        <p className="paragraph">Mira nuestro portafolio más reciente mantente al día con eventos y promociones entérate de nuestras novedades en tiempo real.</p>
        <div className="container-redes">
          <svg className="h" xmlns="http://www.w3.org/2000/svg" width="350" height="100"><path className='icons' fill="#FFF" d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"/></svg>
          
          <svg className="h" xmlns="http://www.w3.org/2000/svg" width="350" height="100"><path className='icons' fill="#FFF" d="M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.579.227.56 2.242.394 5.877.345 6.944.334 7.284.334 10s.011 3.057.06 4.123c.166 3.632 2.181 5.65 5.816 5.817 1.068.048 1.408.06 4.123.06 2.716 0 3.057-.012 4.124-.06 3.628-.167 5.651-2.182 5.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11 2.249 18.093.228 14.458.06 13.39.01 13.049 0 10.333 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.339-9.87a1.2 1.2 0 10-.001 2.4 1.2 1.2 0 000-2.4z"/></svg>

          <svg className="h" xmlns="http://www.w3.org/2000/svg" width="350" height="100"><path className='icons' fill="#FFF" d="M20.667 2.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0014.513.873c-2.649 0-4.595 2.472-3.997 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478A4.086 4.086 0 011.47 6.59c-.045 1.901 1.317 3.68 3.29 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.834 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z"/></svg>

          <svg className="h" xmlns="http://www.w3.org/2000/svg" width="350" height="100"><path className='icons' fill="#FFF" d="M10.333 0c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.701 14.077c-1.752.12-5.653.12-7.402 0C4.735 13.947 4.514 13.018 4.5 10c.014-3.024.237-3.947 2.132-4.077 1.749-.12 5.651-.12 7.402 0 1.898.13 2.118 1.059 2.133 4.077-.015 3.024-.238 3.947-2.133 4.077zM8.667 8.048l4.097 1.949-4.097 1.955V8.048z"/></svg>
        </div>
      </div>
    </div>
  </>
  )
}
