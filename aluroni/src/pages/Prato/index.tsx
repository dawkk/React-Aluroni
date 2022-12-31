import style from './Prato.module.scss';
import { useLocation, useParams } from 'react-router-dom';

export default function Prato() {
  const {state} = useLocation();
  const {prato} = state;
  return (
    <>
      <button className={styles.voltar}>
        {'< Voltar'}
      </button>
      <section className={styles.container}>
        <h1 className={styles.titulo}>
          {prato.title}
        </h1>
        <div>
          <img src={prato.photo} alt={prato.title}/>
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>
            {prato.description}
          </p>
          <div className={styles.tags}>
            <div className={}>
    	        {prato.category.label}
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}