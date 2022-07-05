import styled from 'styled-components';

export const StyledAvatar = styled.img`
  display: block;
  border-radius: 50%;
  width: 340px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledUserName = styled.p`
  display: flex;
  border-radius: 50%;
  width: 340px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  color: ${p => p.theme.colors.black};
`;

export const StyledText = styled(StyledUserName)`
  color: ${p => p.theme.colors.secondary};
`;

export const StyledListInfo = styled.ul`
  display: flex;
  list-style: none;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
`;

export const StyledListInfoItem = styled.li`
  width: 100%;
  display: block;
  justify-content: space-between;
  border: 2px solid ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.secondary};
`;

export const StyledListInfoItemSpan = styled.span`
  display: flex;
  justify-content: center;
`;
