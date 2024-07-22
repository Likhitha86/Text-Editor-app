import React from 'react';

interface Props {
  fonts: { family: string }[];
  selectedFont: string;
  setSelectedFont: (font: string) => void;
}

const FontSelector: React.FC<Props> = ({ fonts, selectedFont, setSelectedFont }) => {
  return (
    <select value={selectedFont} onChange={e => setSelectedFont(e.target.value)}>
      {fonts.length > 0 ? (
      fonts.map(font => (
        <option key={font.family} value={font.family}>
          {font.family}
        </option>
      ))
    ) : (
      <option value="">No fonts available</option>
    )
    }
    </select>
  );
};

export default FontSelector;
