import ilustrationImg from '../assets/illustration.svg';
import logoImg from '../assets/logo.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../contexts/AuthContext';

export function NewRoom() {
  const { user } = useContext(authContext);
  return (
    <div id="page-auth">
      <aside>
        <img src={ilustrationImg} alt="Ilustração simbolizada" />
        <strong>Crie salas de Q&amp; A ao vivo</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h1>{user?.name}</h1>
          <h2>Cria uma nova sala</h2>
          <form>
            <input type="text" placeholder="Nome da sala" />
            <Button>Criar sala</Button>
          </form>
          <p>
            Quer em uma sala já existente? <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
