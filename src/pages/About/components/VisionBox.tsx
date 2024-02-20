import React from 'react';
import '../Styles/VisionBox.scss'; // Make sure to create a corresponding CSS file for styling.

interface VisionBoxProps {
  title: string;
  content: string;
  color: string; // Assuming color is passed as a prop for different backgrounds
}

const VisionBox: React.FC<VisionBoxProps> = ({ title, content, color }) => {
  return (
    <div className={`vision-box ${color}`}>
      <div className="vision-title">{title}</div>
      <p className="vision-content">{content}</p>
    </div>
  );
};

export default VisionBox;
