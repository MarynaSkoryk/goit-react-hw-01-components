import styled from '@emotion/styled';

export const Friend = styled.li`
 display: flex;
  align-items: center;
  padding: 5px 15px;
  border: 1px solid var(--border-color);
  box-shadow: 0px 0px 4px 0px rgba(145, 145, 145, 0.38);
  gap: 15px;
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 10px;
  
  &:last-child {
  margin-bottom: 0;`;

export const AvatarImage = styled.img`
  width: 94px;
  height: 94px;
  height: 100px;
  border-radius: 6px;
`;

export const Name = styled.p`
  font-size: 25px;
`;

export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;

  background-color: ${friends => (friends.isOnline ? 'green' : 'red')};
`;
