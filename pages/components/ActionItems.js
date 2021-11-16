import React from "react";
import tw from "tailwind-styled-components";
import Link from "next/link";

const ActionItems = () => {
  return (
    <Actions>
      <Header>
        <UberLogo src="/uber.svg" />
        <Profile>
          <Name>Sai Kiran</Name>
          <UserLogo src="/trimmed.jpg" />
        </Profile>
      </Header>
      <ActionButtons>
        <Link href="/search">
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png"></ActionButtonImage>
            Ride
          </ActionButton>
        </Link>
        <ActionButton>
          <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png"></ActionButtonImage>
          Wheels
        </ActionButton>
        <ActionButton>
          <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png"></ActionButtonImage>
          Reserve
        </ActionButton>
      </ActionButtons>
      <InputButton>Where to go?</InputButton>
    </Actions>
  );
};

const Actions = tw.div`
flex-1 p-4
`;

const Header = tw.div`
flex justify-between items-center
`;

const UberLogo = tw.img`
h-32
`;

const Profile = tw.div`
flex items-center
`;

const Name = tw.div`
mr-4 
`;

const UserLogo = tw.img`
h-12 w-12 rounded-full
`;

const ActionButtons = tw.div`
flex
`;

const ActionButton = tw.div`
bg-gray-200 flex-1 flex m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`;

const ActionButtonImage = tw.img`
h-3/5
`;

const InputButton = tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`;

export default ActionItems;
