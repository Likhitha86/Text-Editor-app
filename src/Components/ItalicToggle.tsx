import React from 'react';

interface Props {
  isItalic: boolean;
  setIsItalic: (isItalic: boolean) => void;
}

const ItalicToggle: React.FC<Props> = ({ isItalic, setIsItalic }) => {
  return (
    <label>
      Italic
      <input type="checkbox" checked={isItalic} onChange={e => setIsItalic(e.target.checked)} />
    </label>
  );
};

export default ItalicToggle;
