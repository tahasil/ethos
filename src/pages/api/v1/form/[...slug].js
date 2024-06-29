import nc from "next-connect";
const FormController = require("../../../../controllers/Form.Controllers")

let slug = [];

const handler = nc()

handler.use('/api/vi/form/[...slug]', async (req, res, next) => {
    slug = req.query.slug;
    next();
});

handler.get('/api/v1/form/get-signed-url',(req, res) => {
    return FormController.getSignedURL(req, res);
});
handler.post('/api/v1/form/mahi',(req, res) => {
    return FormController.mahiForm(req, res);
});
handler.post('/api/v1/form/join',(req, res) => {
    return FormController.joinForm(req, res);
});
handler.post('/api/v1/form/newsletter',(req, res) => {
    return FormController.newsletterForm(req, res);
});

export default handler;
