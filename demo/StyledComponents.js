const Logo = styled.h1`
  transform: skew(-7deg);

  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.red};
    text-transform: uppercase;
    color: ${({ blue }) => blue};
  }

  @media (${props => props.theme.bpLg}) {
    margin: 0;
    text-align: center;
  }
`;
