import { Card } from "./Card";
import img from '../../public/img/carousel-1.jpg'
import img1 from '/public/team/Rosa.jpg'
import img2 from '/public/team/Emma.jpg'
import img3 from '/public/team/Steve.jpg'


export function Nosotros () {

  return (
    <div className="container-about">
      <div className="about-history">
        <p className='filterable-title pos-relative'>
          <span className='filterable-title-text title'>Historia del estudio</span>
        </p> 
        <img src={img} alt="" className="services-image" />
        <div className="about-content">
          <p className="title">Historia del estudio:</p>
          <p className="paragraph">Nuestro estudio comenzó con una simple pero poderosa visión: capturar momentos reales de la vida de las personas. Desde nuestros humildes comienzos en 2017, hemos crecido y evolucionado, ganando la confianza de nuestros clientes a lo largo del camino.</p>
          <p className="paragraph">Con el tiempo, hemos ampliado nuestro equipo y nuestros servicios, sin perder nunca de vista nuestra pasión por la fotografía auténtica.</p>
          <p className="paragraph">Creemos que cada foto es una oportunidad para contar una historia única, y nos sentimos honrados de haber participado en tantas historias hermosas.</p>
        </div>
      </div>
      <div className="about-team">
        <p className='filterable-title pos-relative'>
          <span className='filterable-title-text title'>Equipo de fotógrafos</span>
        </p> 
        <p className="paragraph">Nuestro equipo está compuesto por profesionales apasionados y talentosos, cada uno con su especialidad, pero todos compartiendo la misma misión: capturar momentos que perduren</p>
        <p className="paragraph">La colaboración y el espíritu de equipo nos definen; cada uno aporta algo especial que enriquece nuestra visión como estudio.</p>
        <div className="client-image">
            <Card image={img1} name={'Raphone Rosa'} text={'Con años de experiencia en fotografía de retrato y moda, tiene una habilidad especial para capturar la esencia y el estilo de cada persona que fotografía.'} />
            <Card image={img2} name={'Emma James'} text={'Enfocado en fotografía de eventos, es experto en captar esos momentos espontáneos y llenos de emoción que hacen que cada evento sea inolvidable.'} />
            <Card image={img3} name={'Steve Gerrish'} text={'Especialista en fotografía artística y creativa, le encanta experimentar con luz y composición para crear imágenes únicas y visualmente impactantes.'} />
        </div>
      </div>
        <div className="about-prime">
          <p className='filterable-title pos-relative'>
          <span className='filterable-title-text title'>Premios y reconocimientos</span>
        </p> 
        <p className="paragraph">A lo largo de nuestra trayectoria, hemos tenido el honor de recibir varios premios y reconocimientos por nuestro trabajo.</p>

        </div>
    </div>
  )
}
