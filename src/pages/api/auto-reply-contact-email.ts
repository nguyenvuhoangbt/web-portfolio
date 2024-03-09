import AutoReplyContactEmail from '@/src/service/UseMailService';
import { StatusCodes, getReasonPhrase } from 'http-status-codes';
import type { NextApiRequest, NextApiResponse } from 'next';

export type ResponseData = {
  message: string;
};

const AutoReplyContactEMail = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  const { method } = req;

  switch (method) {
    case 'POST': {
      const args = ['language', 'name', 'email', 'message'];
      for (const arg of args) {
        if (!req.body[arg] || !req.body[arg].toString().trim().length) {
          return res.status(StatusCodes.BAD_REQUEST).json({
            message: `Invalid input ${arg}`,
          });
        }
      }
      if (!['en', 'zh'].includes(req.body['language'])) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: `language must be 'en' or 'zh'`,
        });
      }

      await AutoReplyContactEmail({
        toName: req.body['name'],
        toEmail: req.body['email'],
        language: req.body['language'],
        message: req.body['message'],
      })
        .then((code: StatusCodes) => {
          if (code === StatusCodes.OK) {
            res.status(code).json({
              message: 'Email sent',
            });
          } else {
            throw new Error();
          }
        })
        .catch(() => {
          res.status(StatusCodes.BAD_REQUEST).json({
            message: getReasonPhrase(StatusCodes.BAD_REQUEST),
          });
        });
      break;
    }
    default:
      res.setHeader('Allow', ['POST']);
      res
        .status(StatusCodes.METHOD_NOT_ALLOWED)
        .end(`Method ${method} Not Allowed`);
      break;
  }

  return res;
};

export default AutoReplyContactEMail;
