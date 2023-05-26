import { Message } from "../Message";
import { MessageWapper } from "./styles";

export default function Conversation({ conversation }): JSX.Element {
  // replaces with api call to retrieve conv with id
  const user = "bidule";
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
    <>
      {mockConv.messages.map((message, index) => (
        <MessageWapper
          key={`messages${index}`}
          $right={message.author === user}
        >
          <Message message={message} />
        </MessageWapper>
      ))}
    </>
  );
}
