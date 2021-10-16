import './App.css';
import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm'
import  ChatFeed  from './components/ChatFeed';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return(
    <ChatEngine
    height="100vh"
      projectID="1f39a112-48ab-4aab-9a11-07ca47b16819"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}


export default App;
