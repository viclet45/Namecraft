import React from 'react';

const TemplateSelector = ({ template, setTemplate }) => {
  return (
    <div>
      <label>Select Template: </label>
      <select value={template} onChange={(e) => setTemplate(e.target.value)}>
        <option value="">--Choose a template--</option>
        <option value="Template1">Template 1</option>
        <option value="Template2">Template 2</option>
      </select>
    </div>
  );
};

export default TemplateSelector;