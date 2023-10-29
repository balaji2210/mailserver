const nodeMailin = require("node-mailin");

nodeMailin.start({
  port: 2525,
  disableWebhook: true,
});

nodeMailin.on("message", (connection, data, content) => {
  console.log("New email received:");
  console.log(data);
  // Process the email data as needed
});

nodeMailin.on("error", (err) => {
  console.error("Error occurred:", err);
});
