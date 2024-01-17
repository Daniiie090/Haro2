// This is within your message handler function
async function onMessageReceived(m) {
  const command = m.message.conversation; // Assuming the command is the message text
  
  // You would have some logic here to determine whether to react and which emoji to use
  if (command === "لايك") {
    const reaction = "👍"; // The reaction you want to send

    try {
      // Send reaction; Make sure you've previous received or sent a message from/to the chat
      // m.key (m.key.remoteJid is the chat ID, m.key.id is the message ID to react to)
      await conn.sendMessage(m.key.remoteJid, { react: { text: reaction, key: m.key } });
    } catch (e) {
      console.error("Failed to send reaction", e);
    }
  }
}

// You would ensure this function is invoked for each incoming message
conn.on('message-new', onMessageReceived);
