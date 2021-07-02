import ilustrationImg from '../assets/illustration.svg';
import logoImg from '../assets/logo.svg';
import googleIconImg from '../assets/google-icon.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';

import { useHistory } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';
export function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth();
  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push('/room/new');
  }
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
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo do google" />
            Crie a sua sala com o google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input type="text" placeholder="Digite o codigo da sala" />
            <Button>Entra na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
