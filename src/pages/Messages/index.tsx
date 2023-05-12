import { useState } from "react";

import Conversation from "./components/Conversation";
import PreviewSection from "./components/PreviewSection";

export default function MessagesPage(): JSX.Element {
  // replace with api call to retrieve conversations
  const conversations = [
    {
      id: 0,
      sender: "bidule",
      preview: "coucou c'est moi",
    },
    {
      id: 1,
      sender: "fifou",
      preview: "yoooooooooo ",
    },
    {
      id: 3,
      sender: "machin",
      preview: "coucou biduuuule",
    },
  ];
  const [selectedConv, setSelectedConv] = useState(conversations[0].id);

  return (
    <>
      <PreviewSection
        conversations={conversations}
        setSelectedConv={setSelectedConv}
      />
      <Conversation conversation={selectedConv} />
    </>
  );
}
