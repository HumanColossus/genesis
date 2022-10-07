import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { trpc } from "../utils/trpc";
import { Main, Container, Header } from "../components/basics";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { createPostSchema } from "../utils/schema";

const AddPost: NextPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const CreateProject = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<input>({
      resolver: zodResolver(createPostSchema),
    });

    const createPost = trpc.useMutation("post.createPost");

    type input = z.infer<typeof createPostSchema>;
    const onSubmit: SubmitHandler<input> = async (data) => {
      const newPost = await createPost.mutateAsync({
        data: data,
        author: session?.user?.username!,
      });
      router.push(`/posts/${newPost.id}`);
    };

    const error = "border-red-500";

    if (status === "unauthenticated") {
      router.push("/sign-up");
      return <div></div>;
    }

    if (status === "loading") {
      return <div></div>;
    }

    return (
      <Container>
        <h1 className="text-lg font-bold">New Post</h1>
        <div className="mt-5 flex w-full flex-col">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-1"
          >
            <label>Post Name</label>
            <input
              {...register("title")}
              className={classNames("rounded-sm border bg-[#00001c] p-1", {
                [`${error}`]: errors.title,
              })}
            />
            <h1 className="text-red-500">
              {errors.title && errors.title.message}
            </h1>
            <label>Post Sub-header</label>
            <input
              {...register("subtitle")}
              className={classNames("rounded-sm border bg-[#00001c] p-1", {
                [`${error}`]: errors.subtitle,
              })}
            />
            <h1 className="text-red-500">
              {errors.subtitle && errors.subtitle.message}
            </h1>

            <div className="flex flex-col py-2">
              <label>What have you been working on?</label>
              <textarea
                className={classNames("p-2 text-black", {
                  [`${error} rounded border-2`]: errors.content,
                })}
                {...register("content")}
              />
              <h1 className="text-red-500">
                {errors.content && errors.content.message}
              </h1>
            </div>
            <div className="flex justify-between gap-3"></div>
            <input
              type="submit"
              className="mt-10 h-8 w-1/4 cursor-pointer self-end rounded-sm border bg-white font-mono text-black"
              value="Create"
            />
          </form>
        </div>
      </Container>
    );
  };

  if (status === "loading") return <></>;
  if (status === "unauthenticated") {
    router.push("/sign-up");
    return <></>;
  }

  return (
    <div className="flex flex-col">
      <Main>
        <CreateProject />
      </Main>
    </div>
  );
};

export default AddPost;
