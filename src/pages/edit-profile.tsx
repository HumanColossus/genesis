import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { trpc } from "../utils/trpc";
import { Main, Container } from "../components/basics";
import classNames from "classnames";
import { createAccountSchema } from "src/utils/schemas";
import { useSession } from "next-auth/react";
import type { NextPageWithAuth } from "src/utils/types";
import { useRouter } from "next/router";

const EditProfile: NextPageWithAuth = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const error = "border-red-500";

  if (status === "loading") return <></>;

  if (status === "unauthenticated") {
    router.push("/sign-up");
    return <></>;
  }

  const CreateAccount = () => {
    const user = trpc.proxy.user.user.useQuery({
      username: session!.user!.username!,
    });
    const createAccount = trpc.proxy.user.updateAccount.useMutation();

    type input = z.infer<typeof createAccountSchema>;
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<input>({
      resolver: zodResolver(createAccountSchema),
    });

    const onSubmit: SubmitHandler<input> = async (data) => {
      await createAccount.mutateAsync({
        ...data,
        username: session?.user?.username!,
      });

      user.refetch();
      router.push(`/${session?.user?.username!}`);
    };

    if (user.isLoading) return <></>;

    return (
      <Container>
        <h1 className="text-lg font-bold">Edit your account</h1>
        <div className="flex w-full flex-col">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <div className="flex flex-col py-2">
              <label>Name</label>
              <input
                {...register("name")}
                className={classNames("rounded-sm border bg-[#00001c] p-1", {
                  [`${error}`]: errors.name,
                })}
                defaultValue={user.data?.name ?? ""}
              />
              <h1 className="text-red-500">
                {errors.name && errors.name.message}
              </h1>
            </div>
            <div className="flex flex-col py-2">
              <label>Bio</label>
              <input
                {...register("bio")}
                className={classNames("rounded-sm border bg-[#00001c] p-1", {
                  [`${error}`]: errors.bio,
                })}
                defaultValue={user.data?.aboutMe ?? ""}
              />
              <h1 className="text-red-500">
                {errors.bio && errors.bio.message}
              </h1>
            </div>
            <h3 className="pt-2 font-mono text-slate-600">Optional</h3>
            <div className="flex justify-between gap-4">
              <div className="flex flex-col py-2">
                <label
                  className={classNames({
                    "text-red-500": errors.discipline,
                  })}
                >
                  Discipline
                </label>
                <input
                  {...register("discipline")}
                  className={classNames("rounded-sm border bg-[#00001c] p-1", {
                    [`${error}`]: errors.discipline,
                  })}
                  defaultValue={user.data?.category ?? ""}
                />
              </div>
              <div className="flex flex-1 flex-col py-2">
                <label
                  className={classNames({
                    "text-red-500": errors.from,
                  })}
                >
                  Location
                </label>
                <input
                  {...register("from")}
                  className={classNames("rounded-sm border bg-[#00001c]  p-1", {
                    [`${error}`]: errors.from,
                  })}
                  defaultValue={user.data?.from ?? ""}
                />
              </div>
              <div className="flex flex-initial flex-col py-2">
                <label
                  className={classNames({
                    "text-red-500": errors.age,
                  })}
                >
                  Age
                </label>
                <input
                  type="number"
                  {...register("age", { valueAsNumber: true })}
                  defaultValue={user.data?.age ?? 0}
                  className={classNames(
                    "w-14 rounded-sm border bg-[#00001c] p-1",
                    {
                      [`${error}`]: errors.age,
                    }
                  )}
                />
              </div>
            </div>
            <input
              type="submit"
              className="mt-10 h-8 w-1/4 cursor-pointer self-end rounded-sm border bg-white font-mono text-black"
              value="Save"
            />
          </form>
        </div>
      </Container>
    );
  };

  return (
    <div className="flex flex-col">
      <Main>
        <CreateAccount />
      </Main>
    </div>
  );
};

export default EditProfile;
