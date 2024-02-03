import { create } from "zustand";
import axios from "axios";

interface Video {
  video: any;
  loading: boolean;
  notTiktokLink: boolean;
  fetchVideo: (url: string) => void;
}

export const useVideo = create<Video>((set) => ({
  video: null,
  loading: false,
  notTiktokLink: false,
  fetchVideo: async (url) => {
    set({ loading: true });
    try {
      set({ loading: true, notTiktokLink: false, video: {} });

      const validUrl =
        url.length === 0
          ? "Link should not be empty"
          : /^(ftp|http|https):\/\/[^ "]+$/.test(url)
          ? null
          : "Input is not a link";

      const res = await axios.get(`https://www.tikwm.com/api/?url=${url}?hd=1`);
      if (typeof res.data.data !== "undefined") {
        set({ notTiktokLink: false, loading: false, video: res.data.data });
      } else if (validUrl) {
        set({ notTiktokLink: true, loading: false });
      } else {
        set({ notTiktokLink: true, loading: false });
      }
    } catch (error) {
      console.log(error);
      set({ notTiktokLink: true, loading: false });
    }
  },
}));
