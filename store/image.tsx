import { create } from "zustand";
import axios from "axios";
import getBase64FromFile from "@/components/FileReader";

// Define a set of colors
const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#FF33A1",
  "#A133FF",
  "#33FFA1",
  "#FF5733",
  "#33FF57",
  "#3357FF",
];

interface Image {
  image: any;
  chartData: {
    classes: string[];
    confidences: number[];
    colors: string[];
  };
  loading: boolean;
  notImageUrl: boolean;
  fetchImage: (url: string) => void;
  fetchImageFile: (file: File) => void;
}

const jsonApi = {
  method: "POST",
  url: `https://detect.roboflow.com/tooth-disease/1?api_key=tAIdURDipgqWJHApslZW&format=json`,
  headers: {
    "Content-Type": "application/json",
  },
  data: "",
};

const imageApi = {
  method: "POST",
  url: `https://detect.roboflow.com/tooth-disease/1?api_key=tAIdURDipgqWJHApslZW&format=image&stroke=3&labels=on`,
  headers: {
    "Content-Type": "application/json",
  },
  responseType: "arraybuffer" as const,
  data: "",
};

export const useImage = create<Image>((set) => ({
  image: null,
  chartData: {
    classes: [],
    confidences: [],
    colors: [], // Add colors to the chart data
  },
  loading: false,
  notImageUrl: false,
  fetchImage: async (url: string) => {
    set({ loading: true });
    const jsonApiUrl = jsonApi.url + `&image=${encodeURIComponent(url)}`;
    const imageApiUrl = imageApi.url + `&image=${encodeURIComponent(url)}`;
    try {
      const jsonResponse = await axios({ ...jsonApi, url: jsonApiUrl });
      const jsonResponseData = jsonResponse.data;

      // handle the image response
      const imageResponse = await axios({ ...imageApi, url: imageApiUrl });
      const blob = new Blob([imageResponse.data], { type: "image/jpeg" });
      const imagePath = URL.createObjectURL(blob);

      const classes = jsonResponseData.predictions.map(
        (pred: { class: string }) => pred.class
      );
      const confidences = jsonResponseData.predictions.map(
        (pred: { confidence: number }) => pred.confidence
      );
      const colorsAssigned = jsonResponseData.predictions.map(
        (_: any, index: number) => colors[index % colors.length] // Assign a color from the predefined set
      );
      set({
        image: imagePath,
        chartData: {
          classes,
          confidences,
          colors: colorsAssigned, // Include colors in the chart data
        },
        loading: false,
        notImageUrl: false,
      });
    } catch (error) {
      set({ loading: false, notImageUrl: true });
    }
  },
  fetchImageFile: async (file: File) => {
    set({ loading: true });
    const base64Image = await getBase64FromFile(file);
    const jsonApiData = { ...jsonApi, data: JSON.stringify(base64Image) };
    const imageApiData = { ...imageApi, data: JSON.stringify(base64Image) };
    try {
      const jsonResponse = await axios(jsonApiData);
      const jsonResponseData = jsonResponse.data;
      const imageResponse = await axios(imageApiData);
      const blob = new Blob([imageResponse.data], { type: "image/jpeg" });
      const imagePath = URL.createObjectURL(blob);

      const classes = jsonResponseData.predictions.map(
        (pred: { class: string }) => pred.class
      );
      const confidences = jsonResponseData.predictions.map(
        (pred: { confidence: number }) => pred.confidence
      );
      const colorsAssigned = jsonResponseData.predictions.map(
        (_: any, index: number) => colors[index % colors.length] // Assign a color from the predefined set
      );
      set({
        image: imagePath,
        chartData: {
          classes,
          confidences,
          colors: colorsAssigned, // Include colors in the chart data
        },
        loading: false,
        notImageUrl: false,
      });
    } catch (error) {
      set({ loading: false, notImageUrl: false });
    }
  },
}));
