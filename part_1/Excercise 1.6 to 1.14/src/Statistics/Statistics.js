import React from 'react';

const Statistics = ({ content, text }) => {
    return (
      <tr>
        <td style={{ padding: '5px 15px' }}>{text}</td>
        <td style={{ padding: '5px 15px' }}>{content}</td>
      </tr>
    );
  };
  
  export default Statistics;