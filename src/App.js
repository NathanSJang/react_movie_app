import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import './App.css';

function App() {
  return (
    <ChatEngine 
      height="100vh"
      projectID="013d4332-ae3f-4cc7-8374-5cace781ede2"
      userName="Nathan-admin"
      userSecret="123123"
      renderChatFeed={(chatAppProps) => < ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
