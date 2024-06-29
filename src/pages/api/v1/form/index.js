import nc from "next-connect";

const FormController = require("../../../../controllers/Form.Controllers")

const handler = nc({
    onNoMatch:(req, res)=> {
        return res.status(404).end("Page not found");
    }
})

handler.get((req, res) => {
    return FormController.getForm(req,res);
});

export default handler;