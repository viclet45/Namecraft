import React, { useState } from 'react';
import TemplateSelector from '../Components/TemplateSelector';
import NameInput from '../Components/NameInput';
import "bootstrap/dist/css/bootstrap.min.css";


function Home() {
  const [template, setTemplate] = useState('');
  const [name, setName] = useState('');
  const [nameTag, setNameTag] = useState('');

  function handleGenerate() {
    if (template === '' || name === '') {
      alert('Please select a template and enter a name.');
      return;
    }
    setNameTag(`Name Tag: ${template} - ${name}`);
  }

  return (
    <div>
      
      <br/>
      <TemplateSelector template={template} setTemplate={setTemplate} />
      <NameInput name={name} setName={setName} />
      <button onClick={handleGenerate} className="btn btn-primary">
        Generate Name Tag
      </button>
      <div>
        <h3>{nameTag}</h3>
      </div>
    </div>
  );
}

export default Home;