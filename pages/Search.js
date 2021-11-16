import React from "react";
import tw from "tailwind-styled-components";

const Search = () => {
  return (
    <Wrapper>
      <ButtonContainer>
        <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"></BackButton>
      </ButtonContainer>
      <InputContainer>
        <FromToIcons>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"></Circle>
          <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"></Line>
          <Square src="https://img.icons8.com/windows/50/000000/square-full.png"></Square>
        </FromToIcons>
        <InputBoxes>
          <Input placeholder="Enter pickup location" />
          <Input placeholder="Where to?" />
        </InputBoxes>
        <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png" />
      </InputContainer>
    </Wrapper>
  );
};
const Wrapper = tw.div`
bg-gray-200 h-screen
`;

const ButtonContainer = tw.div`
bg-white px-4
`;

const BackButton = tw.img`
h-12
`;

const InputContainer = tw.div`
bg-white flex
`;

const FromToIcons = tw.div`
w-10 flex flex-col
`;

const Line = tw.img`
`;

const Circle = tw.img`
`;

const Square = tw.img`
`;

const InputBoxes = tw.div`
flex flex-col flex-1
`;

const Input = tw.input`
h-10 bg-gray-200 my-2 rounded p-2 outline-none border-none
`;

PlusIcon;

const PlusIcon = tw.img`
w-10 h-10 bg-gray-200 rounded-full
`;

export default Search;
