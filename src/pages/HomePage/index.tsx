import { useState } from "react";

import { CTA } from "./components/CTA";

import { TitleCard } from "./components/TitleCard";
// import { SignUpModal } from "../../components/SignUpForm";
import * as S from './styles'

export default function HomePage() {
  // const [isOpen, setIsOpen] = useState(true)
  return (
    <S.Wrapper>
      <TitleCard />
      <CTA />
      {/* <SignUpModal isOpen={isOpen} setIsOpen = {setIsOpen} /> */}
    </S.Wrapper>
  );
}
