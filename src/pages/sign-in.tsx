import { signIn, useSession } from "next-auth/react";
// import { useState } from "react";
import { useRouter } from "next/router";
import { Main, Container, Header } from "../components/basics";
import { NextPageWithAuth } from "src/utils/types";

const SignIn: NextPageWithAuth = () => {
  // const [email, setEmail] = useState("");
  const { data: session, status } = useSession();
  const router = useRouter();

  if (session?.user) {
    router.push("/home");
    return null;
  }

  if (status === "loading") return <></>;

  return (
    <Main>
      <Header value="Need help?" link="https://twitter.com/colossusfyi" />
      <Container title="/ Login & Sign Up">
        <div className="flex items-center gap-3">
          {/* <input
            className="h-9 w-full rounded bg-[#4e4e4e4d] px-3 font-mono text-xs font-normal"
            placeholder="📬 Enter your email to receive a magic link..."
            onChange={(e) => setEmail(e.target.value)}
          /> */}
          <button
            className="bold flex h-9 cursor-pointer items-center justify-center rounded-md bg-[#1DA1F2] px-3 font-button text-sm font-bold text-white"
            onClick={() => {
              signIn("twitter", { callbackUrl: "/home" });
            }}
          >
            🐦 Login or Sign Up with Twitter
          </button>
        </div>
      </Container>
    </Main>
  );
};

export default SignIn;
