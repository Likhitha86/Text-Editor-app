
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FontSelector from './Components/fontFamily';
import FontWeightSelector from './Components/fontWeight';
import ItalicToggle from './Components/ItalicToggle';
import TextEditor from './Components/editor';

interface Font {
  family: string;
  variants: string[];
}

const App: React.FC = () => {
  const [fonts, setFonts] = useState<Font[]>([]);
  const [selectedFont, setSelectedFont] = useState<string>('Arial');
  const [selectedWeight, setSelectedWeight] = useState<string>('400');
  const [isItalic, setIsItalic] = useState<boolean>(false);
  const [text, setText] = useState<string>('');

  useEffect(() => {
    axios.get('./punt-frontend-assignment.json').then(response => {
      setFonts(response.data.items || []);
    });

    const savedFont = localStorage.getItem('font');
    const savedWeight = localStorage.getItem('weight');
    const savedItalic = localStorage.getItem('italic');
    const savedText = localStorage.getItem('text');

    if (savedFont) setSelectedFont(savedFont);
    if (savedWeight) setSelectedWeight(savedWeight);
    if (savedItalic) setIsItalic(savedItalic === 'true');
    if (savedText) setText(savedText);
  }, []);

  useEffect(() => {
    localStorage.setItem('font', selectedFont);
    localStorage.setItem('weight', selectedWeight);
    localStorage.setItem('italic', isItalic.toString());
    localStorage.setItem('text', text);
  }, [selectedFont, selectedWeight, isItalic, text]);

  return (
    <div>
      <FontSelector fonts={fonts} selectedFont={selectedFont} setSelectedFont={setSelectedFont} />
      <FontWeightSelector font={selectedFont} selectedWeight={selectedWeight} setSelectedWeight={setSelectedWeight} />
      <ItalicToggle isItalic={isItalic} setIsItalic={setIsItalic} />
      <TextEditor text={text} setText={setText} font={selectedFont} weight={selectedWeight} italic={isItalic} />
    </div>
  );
};

export default App;
