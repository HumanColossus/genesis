import type { NextPage } from "next";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { trpc } from "../utils/trpc";
import { Main, Container, Header } from "../components/basics";
import classNames from "classnames";
import Image from "next/image";

const Index: NextPage = () => {
  const error = "border-red-500";

  const [steps, setSteps] = useState<number>(0);

  const CreateAccount = () => {
    const schema = z.object({
      name: z
        .string()
        .min(1, { message: "Name should be greater than 1 character" })
        .max(250, { message: "You've got a long name!" }),
      bio: z
        .string()
        .min(1, { message: "Bio should be greater than 1 character" })
        .max(1000, {
          message:
            "We're aiming for concise bio's on Colossus, please try again.",
        }),
      discipline: z
        .string()
        .max(50, {
          message:
            "We're aiming for concise disciplines on Colossus, please try again.",
        })
        .nullable(),
      from: z
        .string()
        .max(100, {
          message:
            "We're aiming for concise disciplines on Colossus, please try again.",
        })
        .nullable(),
      age: z
        .number()
        .max(100, { message: "Users must be under 100" })
        .optional(),
    });

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<input>({
      resolver: zodResolver(schema),
    });

    type input = z.infer<typeof schema>;

    const onSubmit: SubmitHandler<input> = (data) => {
      setSteps(1);
      console.log(data);
    };

    const imageUrl = trpc.proxy.image.getSignedURL.useMutation();

    return (
      <Container>
        <h1 className="text-lg font-bold">Create your account</h1>
        <div className="flex w-full flex-col">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <label className="pt-4">Profile Picture</label>
            <div className="flex items-center gap-3 pb-2">
              <Image
                src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                alt="The human colossus logo"
                width={48}
                height={48}
                className="rounded-md"
              />
              <input
                className="file:border-1 text-[#00001c] file:h-12 file:rounded file:border file:border-white file:bg-[#00001c] file:text-white"
                type="file"
                accept="image/*"
                onChange={(e) =>
                  fetch(imageUrl.data!.url, {
                    method: "PUT",
                    body: e.target.files![0],
                  })
                }
              />
              <p className="whitespace-nowrap text-xs">400 x 400 recommended</p>
            </div>
            <div className="flex flex-col py-2">
              <label>Name</label>
              <input
                {...register("name")}
                className={classNames("rounded-sm border bg-[#00001c] p-1", {
                  [`${error}`]: errors.name,
                })}
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
                  defaultValue={0}
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
              value="Next 1/3"
            />
          </form>
        </div>
      </Container>
    );
  };

  const CreateProject = () => {
    const schema = z.object({
      name: z.string().nullable(),
      bio: z.string().nullable(),
      category: z.string().nullable(),
      teamSize: z.number().nullable(),
    });

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<input>({
      resolver: zodResolver(schema),
    });

    type input = z.infer<typeof schema>;

    const onSubmit: SubmitHandler<input> = (data) => {
      setSteps(2);
      console.log(data);
    };
    console.log(errors);

    return (
      <Container>
        <h1 className="text-lg font-bold">Add your project</h1>
        <h3 className="pt-2 font-mono text-slate-600">Optional</h3>
        <div className="flex w-full flex-col">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <label>Project Name</label>
            <input
              {...register("name")}
              className={classNames("rounded-sm border bg-[#00001c] p-1", {
                [`${error}`]: errors.name,
              })}
            />
            <h1 className="text-red-500">
              {errors.name && errors.name.message}
            </h1>

            <div className="flex flex-col py-2">
              <label>Project Bio</label>
              <textarea
                className={classNames("p-2 text-black", {
                  [`${error} rounded border-2`]: errors.bio,
                })}
                {...register("bio")}
              />
              <h1 className="text-red-500">
                {errors.name && errors.name.message}
              </h1>
            </div>
            <div className="flex justify-between gap-3">
              <div className="flex flex-1 flex-col py-2">
                <label>Category</label>
                <input
                  {...register("category")}
                  className={classNames("rounded-sm border bg-[#00001c] p-1", {
                    [`${error}`]: errors.category,
                  })}
                />
                <h1 className="text-red-500">
                  {errors.category && errors.category.message}
                </h1>
              </div>

              <div className="flex flex-initial flex-col py-2">
                <label>Team Size</label>
                <input
                  type="number"
                  {...register("teamSize", { valueAsNumber: true })}
                  defaultValue={0}
                  className="w-24 rounded-sm border bg-[#00001c] p-1"
                />
              </div>
            </div>
            <input
              type="submit"
              className="mt-10 h-8 w-1/4 cursor-pointer self-end rounded-sm border bg-white font-mono text-black"
              value="Next 2/3"
            />
          </form>
        </div>
      </Container>
    );
  };

  const AdditionalInfo = () => {
    const schema = z.object({
      twitter: z.string().startsWith("https://twitter.com/", {
        message: "Link must start with https://twitter.com/",
      }),
      substack: z.string(),
      personalSite: z.string(),
    });

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<input>({
      resolver: zodResolver(schema),
    });

    type input = z.infer<typeof schema>;

    const onSubmit: SubmitHandler<input> = (data) => {
      console.log("Colossus Entered");
      console.log(data);
    };

    return (
      <Container>
        <h1 className="text-lg font-bold">Additional account info</h1>
        <h3 className="pt-2 font-mono text-slate-600">Optional</h3>
        <div className="flex w-full flex-col">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <div className="flex flex-col py-2">
              <label>Twitter</label>
              <input
                {...register("twitter")}
                className="rounded-sm border bg-[#00001c] p-1"
              />
              <h1 className="text-red-500">
                {errors.twitter && errors.twitter.message}
              </h1>
            </div>
            <div className="flex flex-col py-2">
              <label>Substack</label>
              <input
                {...register("substack")}
                className="rounded-sm border bg-[#00001c] p-1"
              />
            </div>
            <div className="flex flex-col py-2">
              <label>Personal Site</label>
              <input
                {...register("personalSite")}
                className="rounded-sm border bg-[#00001c] p-1"
              />
            </div>
            <input
              type="submit"
              className="mt-10 h-8 cursor-pointer rounded-sm border bg-white font-mono text-black"
              value="Enter the Colossus"
            />
          </form>
        </div>
      </Container>
    );
  };

  return (
    <div className="flex flex-col">
      <Main>
        {
          [
            <CreateAccount key={1} />,
            <CreateProject key={2} />,
            <AdditionalInfo key={3} />,
          ][steps]
        }
      </Main>
    </div>
  );
};

export default Index;
