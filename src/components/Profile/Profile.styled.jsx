import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  width: 250px;
  border-radius: 6px;
  text-align: center;
  border: 1px solid rgb(223, 223, 223);
  overflow: hidden;
  box-shadow: 0px 0px 4px 0px rgba(145, 145, 145, 0.38);
`;
export const Description = styled.div`
  padding: 30px;
  flex-grow: 1;
`;
export const Avatar = styled.img`
  width: 80px;
  display: block;
  border-radius: 50px;
  margin: auto;
`;
export const Name = styled.p`
  font-weight: bold;
  font-size: 20px;
`;
export const Tag = styled.p`
  margin-top: 12px;
  color: rgb(134, 134, 134);
`;
export const LocationTag = styled.p`
  margin-top: 12px;
  color: rgb(134, 134, 134);
`;
export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  background-color: rgb(243, 243, 243);
  padding-left: 0;
`;
export const StatsList = styled.li`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid rgb(223, 223, 223);
  border-top: 1px solid rgb(223, 223, 223);
  width: calc(100% / 3);
  padding-top: 20px;
  padding-bottom: 20px;

  &:last-child {
    border-right: none;
  }
`;
export const Label = styled.span`
  color: rgb(134, 134, 134);
  margin-bottom: 8px;
`;
export const Quantity = styled.span`
  font-weight: bold;
`;
