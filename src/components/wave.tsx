import React, { useState } from 'react';
import { css } from '@emotion/core';

export interface Props {}

const Wave: React.SFC<Props> = () => {
  const [waves, setWaves] = useState(0);
  const label = `👋 ${waves} ${waves === 1 ? 'wave' : 'waves'} `;

  return (
    <button
      css={css`
        background: blue;
        border: none;
        color: white;
        font-size: 1.25rem;
      `}
      onClick={() => setWaves(waves + 1)}
    >
      {label}
    </button>
  );
};

export default Wave;
