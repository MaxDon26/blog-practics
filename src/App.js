import styled from "styled-components";

const AppComponent = styled.div`
  text-align: center;
`;

export const App = () => {
  return (
    <AppComponent>
      <i className="fa fa-podcast" aria-hidden="true"></i>
    </AppComponent>
  );
};
