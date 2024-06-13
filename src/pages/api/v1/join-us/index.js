import nc from "next-connect";
import { sendEmail } from "../../../../email/email";

// const handler = nc()
const handler = nc({
  onNoMatch: (req, res) => {
    return res.status(404).end("Page not found");
  },
});

handler.post(async(req, res) => {
    const { name, email ,source} = req.body;
  
    try {
      // Assuming sendEmail function returns a response object
      const response = await sendEmail(name, email,source);
  
      if (response.status) {
        res.status(200).json({ message: 'Form Submitted Successfully' });
      } else {
        res.status(500).json({ message: 'Failed to Submit', error: response.message });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to Submit', error: error.message });
    }
  });

export default handler;
