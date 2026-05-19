const {
    sendMailService,
  } = require("../service/email.service");
  
  const sendMessage = async (req, res) => {
  
    const { email, message } = req.body;
  
    try {
  
      await sendMailService(email, message);
  
      res.status(200).json({
        success: true,
        message: "Message sent successfully",
      });
  
    } catch (error) {

        console.log("ERROR EMAIL:");
        console.log(error);
      
        res.status(500).json({
          success: false,
          message: "Failed to send message",
        });
      }
  };
  
  module.exports = {
    sendMessage,
  };