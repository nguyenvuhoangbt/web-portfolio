import SendIcon from '@mui/icons-material/Send';
import Link from 'next/link';
import { Button } from '@mui/material';

const ButtonContactMe = () => {
  return (
    <Button
      variant="contained"
      startIcon={<SendIcon w-text="!normal" />}
      className="font-inherit"
      w-bg="black"
    >
      <Link href="https://www.linkedin.com/" target="_blank">
        Contact Me
      </Link>
    </Button>
  );
};

export default ButtonContactMe;
