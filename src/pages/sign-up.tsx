import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/router";
import { Main, Container, Header } from "../components/basics";
import { NextPageWithAuth } from "src/utils/types";

const CreateUser: NextPageWithAuth = () => {
  const [email, setEmail] = useState("");
  const { data: session, status } = useSession();
  const router = useRouter();

  if (session?.user) {
    router.push("/");
    return null;
  }

  if (status === "loading") return <></>;

  return (
    <Main>
      <Header value="Need help?" link="https://twitter.com/colossusfyi" />
      <Container title="/ Sign Up">
        <div className="flex gap-3 ">
          <input
            className="h-9 w-full rounded bg-[#4e4e4e4d] px-3 font-mono text-xs font-normal"
            placeholder="📬 Enter your email to receive a magic link..."
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bold flex h-9 w-40 cursor-pointer items-center justify-center rounded-md bg-[#5f4bdd] px-2 font-button text-sm font-bold text-black"
            onClick={() => {
              signIn("email", { email: email, callbackUrl: "/new-user" });
            }}
          >
            Send login link
          </button>
        </div>
      </Container>
    </Main>
  );
};

export default CreateUser;
