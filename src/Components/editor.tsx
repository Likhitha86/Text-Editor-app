import React from 'react';

interface Props {
  text: string;
  setText: (text: string) => void;
  font: string;
  weight: string;
  italic: boolean;
}

const TextEditor: React.FC<Props> = ({ text, setText, font, weight, italic }) => {
  return (
    <textarea
      value={text}
      onChange={e => setText(e.target.value)}
      style={{
        fontFamily: font,
        fontWeight: weight,
        fontStyle: italic ? 'italic' : 'normal',
        width: '100%',
        height: '300px',
      }}
    />
  );
};

export default TextEditor;
