import { Message } from "../Message";

export default function Conversation({ conversation }): JSX.Element {
  // replaces with api call to retrieve conv with id
  const mockConv = {
    sender: "fifou",
    messages: [
      { author: "fifou", content: "alors ça jardine ?", timestamp: Date.now() },
      { author: "bidule", content: "hehe", timestamp: Date.now() },
      {
        author: "fifou",
        content:
          "je fais un très long message,je fais un très long message,je fais un très long message,je fais un très long message,je fais un très long message,je fais un très long message,je fais un très long message,je fais un très long message,je fais un très long message,je fais un très long message, ",
        timestamp: Date.now()
      }
    ]
  };

  return (
    <div>
      {mockConv.messages.map((message, index) => (
        <div key={`messages${index}`}>
          <Message message={message} />
        </div>
      ))}
    </div>
  );
}
