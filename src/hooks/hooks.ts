import { useQuery } from "react-query";

export const useProfileImg = (username?: string | null) => {
  return useQuery(["fetch-iamge", username], async () => {
    const { default: image } = await import(
      `/public/profile-pictures/${username}.jpg`
    );
    return image;
  });
};
