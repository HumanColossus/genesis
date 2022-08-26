import type { NextPage } from "next";
import { Main, Container, TextWrapper, Header } from "../components/basics";

const CheckEmail: NextPage = () => {
  return (
    <Main>
      <Header link="https://twitter.com/colossusfyi" value="Need Help?" />
      <Container title="/ Check your email!" link="Resend email">
        <TextWrapper>
          <h1>We just sent you a magic login link to your email,</h1>
          <br />
          <h1>
            Please check your <span className="font-bold">spam</span> folder if
            you don’t see it in your inbox.
          </h1>
        </TextWrapper>
      </Container>
    </Main>
  );
};

export default CheckEmail;
