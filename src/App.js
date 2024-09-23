import './App.css';
import ConversationCard from './components/ConversationCard';
import ConversationPage from './components/ConversationPage';
import { useState } from 'react';

export const characters = [
  {
    title: 'Drunk Newton',
    description: 'The crazy one',
    characterId: '123',
  },
  {
    title: 'Less Crazy Newton',
    description: 'The less crazy one',
    characterId: '1234',
  },
]

function App() {

const [characterId, setCharacterId] = useState(null);

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      width: '100vw',
    }}>
      {/* Side Navigation Bar */}
      <div style={{
        width: '250px',
        backgroundColor: '#2c3e50',
        color: '#ecf0f1',
        padding: '0px 20px',
        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
      }}>
        <h2 style={{ marginBottom: '30px', color: '#ecf0f1' }}>Char.ai</h2>
        <ul style={{
          listStyle: 'none',
          padding: '0',
          margin: '0',
        }}>
          <li style={{ marginBottom: '20px' }}>
            <a href="#" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Home</a>
          </li>
          <li style={{ marginBottom: '20px' }}>
            <a href="#" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Profile</a>
          </li>
          <li style={{ marginBottom: '20px' }}>
            <a href="#" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Settings</a>
          </li>
          <li style={{ marginBottom: '20px' }}>
            <a href="#" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Messages</a>
          </li>
          <li>
            <a href="#" style={{ color: '#ecf0f1', textDecoration: 'none' }}>Logout</a>
          </li>
        </ul>
      </div>
    
    <div style={{padding: '20px', height: '90vh', overflow: 'auto'}}>
      {/* Main Dashboard Content */}
      <img 
        src="https://cdn.pixabay.com/photo/2024/09/08/18/48/ai-generated-9032944_1280.jpg" 
        alt="AI generated image"
        style={{
          width: '80vw', 
          height: '20vh', 
          objectFit: 'cover'
        }}
      />

      <h1 style={{fontWeight: '300'}}>
        Start or join a conversation
      </h1>
      <br/>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}>
        {
          characters.map((character) => (
            <a href="#conversation-comp" style={{textDecoration: 'none'}}>
            <ConversationCard
              onClick={() => {
                setCharacterId(character.characterId)}}
              key={character.characterId}
              title={character.title}
              description={character.description}
              characterId={character.characterId}
            />
            </a>
          ))
        }
      </div>
      <br/>
      <div id="conversation-comp" style={{paddingTop: '20px'}}>
      {
        characterId && <ConversationPage characterId={characterId} />
      }
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      </div>
      </div>
    </div>
    
  );
}

export default App;
