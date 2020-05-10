import React, { useState } from 'react';
import styled from 'styled-components';
import { space } from '@styles/spacing';
import { color } from '@styles/colors';

export default function Footer() {
  const [showDialog, setShowDialog] = useState(false);

  const handleClickShowDialog = (): void => {
    setShowDialog(true);
  };

  const handleClickHideDialog = (): void => {
    setShowDialog(false);
  };

  return (
    <FooterWrapper>
      <div>&copy; Maybe some copyright text here</div>
      <div onClick={handleClickShowDialog}>Legal</div>
      {showDialog && <Dialog onClose={handleClickHideDialog} />}
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background: ${color.darkPrimary};
  display: flex;
  color: ${color.lightPrimary};
  padding: ${space.medium};
  justify-content: space-between;
`;

function Dialog({ onClose }) {
  const handleClickDialogContent = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <DialogWrapper onClick={onClose}>
      <DialogContent onClick={handleClickDialogContent}>
        This Website uses icons from the following authors:
        <IconAuthor
          url="https://www.flaticon.com/de/autoren/xnimrodx"
          name="Cross Platform Icon"
        />
        <IconAuthor
          url="https://www.flaticon.com/de/autoren/srip"
          name="Puzzle"
        />
        <IconAuthor
          url="https://www.flaticon.com/de/autoren/freepik"
          name="Rocket"
        />
      </DialogContent>
    </DialogWrapper>
  );
}

function IconAuthor({ url, name }) {
  return (
    <IconAuthorWrapper>
      <a href={url} title={name}>
        {name}
      </a>{' '}
      from{' '}
      <a href="https://www.flaticon.com/de/" title="Flaticon">
        {' '}
        www.flaticon.com
      </a>
    </IconAuthorWrapper>
  );
}

const IconAuthorWrapper = styled.div`
  padding-top: ${space.small};
`;

const DialogWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DialogContent = styled.div`
  width: 800px;
  height: 500px;
  background: ${color.lightPrimary};
  border-radius: 5px;
  color: ${color.darkPrimary};
  padding: ${space.large};
`;
