import nodemailer from 'nodemailer';
import path from 'path';
import hbs, {
  NodemailerExpressHandlebarsOptions,
} from 'nodemailer-express-handlebars';
import { StatusCodes } from 'http-status-codes';

type AutoReplyContactEmail = {
  toName: string;
  toEmail: string;
  language: 'zh' | 'en';
  message: string;
};

const UseMailService = async (
  args: AutoReplyContactEmail
): Promise<StatusCodes> => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  const handlebarOptions = {
    viewEngine: {
      partialsDir: path.resolve('./views/'),
      defaultLayout: false,
    },
    viewPath: path.resolve('./views/'),
  } as NodemailerExpressHandlebarsOptions;

  transporter.use('compile', hbs(handlebarOptions));

  const { language, toEmail, toName, message } = args;

  const autoRepContactEmailOption = {
    from: process.env.NODEMAILER_EMAIL,
    to: toEmail,
    subject: 'Thank You for Contacting Me!',
    template: `auto-reply-contact-email-${language}`,
    context: {
      name: toName,
    },
    viewEngine: {
      partialsDir: path.resolve('./views/'),
      defaultLayout: false,
    },
    viewPath: path.resolve('./views/'),
  };

  const emailFromGuestOption = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_EMAIL,
    subject: 'You have new message from website',
    template: `email-from-guest`,
    context: {
      guestName: toName,
      guestEmail: toEmail,
      message,
    },
    viewEngine: {
      partialsDir: path.resolve('./views/'),
      defaultLayout: false,
    },
    viewPath: path.resolve('./views/'),
  };

  try {
    await transporter.sendMail(autoRepContactEmailOption);
    await transporter.sendMail(emailFromGuestOption);
    return StatusCodes.OK;
  } catch {
    return StatusCodes.SERVICE_UNAVAILABLE;
  }
};

export default UseMailService;
