import React, { useState } from 'react';

const App = () => {
  const [currentStep, setCurrentStep] = useState('login');
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  
  const candidates = [
    { id: 1, name: 'Candidate 1', party: 'Party 1', votes: 156 },
    { id: 2, name: 'Candidate 2', party: 'Party 2', votes: 142 },
    { id: 3, name: 'Candidate 3', party: 'Party 3', votes: 128 },
    { id: 4, name: 'Candidate 4', party: 'Party 4', votes: 134 }
  ];

  const LoginScreen = () => (
    <div>
      <h2>Login to Vote</h2>
      <div>
        <label>Voter ID</label>
        <input 
          type="text" 
          placeholder="Enter your voter ID"
        />
      </div>
      <div>
        <label>Password</label>
        <input 
          type="password" 
          placeholder="Enter your password"
        />
      </div>
      <button onClick={() => setCurrentStep('voting')}>
        Continue to Vote
      </button>
    </div>
  );

  const VotingScreen = () => (
    <div>
      <h2>Cast Your Vote</h2>
      <p>Select your preferred candidate below</p>
      
      <div>
        {candidates.map((candidate) => (
          <div 
            key={candidate.id}
            onClick={() => setSelectedCandidate(candidate.id)}
            style={{ 
              border: selectedCandidate === candidate.id ? '2px solid blue' : '1px solid gray',
              padding: '10px',
              margin: '10px 0'
            }}
          >
            <h3>{candidate.name}</h3>
            <p>{candidate.party}</p>
            {selectedCandidate === candidate.id && <span>✓</span>}
          </div>
        ))}
      </div>

      <button 
        onClick={() => setCurrentStep('confirmation')}
        disabled={!selectedCandidate}
      >
        Submit Vote
      </button>
    </div>
  );

  const ConfirmationScreen = () => (
    <div>
      <h2>Vote Submitted!</h2>
      <p>Your vote has been recorded securely</p>

      <div>
        <h3>Current Results</h3>
        {candidates.map((candidate) => (
          <div key={candidate.id}>
            <span>{candidate.name}: </span>
            <span>{candidate.votes} votes</span>
            <div style={{
              background: 'lightgray',
              width: '200px',
              height: '20px'
            }}>
              <div style={{
                background: 'gray',
                width: `${(candidate.votes / 200) * 100}%`,
                height: '100%'
              }}/>
            </div>
          </div>
        ))}
      </div>

      <button onClick={() => setCurrentStep('login')}>
        Exit
      </button>
    </div>
  );

  return (
    <div>
      <header>
        <h1>Online Voting</h1>
      </header>

      {currentStep === 'login' && <LoginScreen />}
      {currentStep === 'voting' && <VotingScreen />}
      {currentStep === 'confirmation' && <ConfirmationScreen />}
    </div>
  );
};

export default App;