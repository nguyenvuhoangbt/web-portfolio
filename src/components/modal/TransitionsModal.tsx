import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import MyButton from '@/src/components/button/MyButton';

// States & Hooks
import UseTranslation from '@/src/hooks/UseTranslation';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid',
  boxShadow: 24,
  borderRadius: '4px',
  p: 4,
};

const TransitionsModal: React.FC<{
  open: boolean;
  onClose: () => void;
  onConfirm?: () => void;
}> = ({ open, onClose, onConfirm }) => {
  const lang = UseTranslation();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
          style: {
            backdropFilter: 'blur(3px)',
          },
        },
      }}
      w-p="x-4"
    >
      <Fade in={open}>
        <Box
          sx={style}
          w-w="<md:90/100 max"
          w-p="<sm:4"
          w-min-w="340px"
          w-whitespace="pre-wrap"
        >
          <p w-text="2rem md:2.5rem" w-font="semibold">
            {lang.confirmation}
          </p>
          <p w-m="t-4">{lang.confirmationMessageModal}</p>
          <p
            w-text="0.85rem $black-color-light"
            w-leading="!normal"
            w-m="t-4"
            style={{
              wordBreak: 'keep-all',
            }}
          >
            {lang.confirmationNoteModal}
          </p>
          <Box sx={{ mt: 2 }} w-flex="~" w-justify="end" w-gap="2">
            <MyButton
              text={lang.no}
              variant="outlined"
              onClick={onClose}
            ></MyButton>
            <MyButton
              text={lang.yes}
              w-shadow="none"
              onClick={onConfirm}
            ></MyButton>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default TransitionsModal;
