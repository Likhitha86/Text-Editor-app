import React from 'react';

interface Props {
  font: string;
  selectedWeight: string;
  setSelectedWeight: (weight: string) => void;
}

const FontWeightSelector: React.FC<Props> = ({ font, selectedWeight, setSelectedWeight }) => {
  // This should be dynamically populated based on the selected font
  const weights = ['400', '700']; 

  return (
    <select value={selectedWeight} onChange={e => setSelectedWeight(e.target.value)}>
      {weights.map(weight => (
        <option key={weight} value={weight}>
          {weight}
        </option>
      ))}
    </select>
  );
};

export default FontWeightSelector;
