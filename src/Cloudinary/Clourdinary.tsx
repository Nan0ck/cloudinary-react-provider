"use client";
import "react";
import { createContext } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import {
  CloudinaryProviderProps,
  CloudinaryContextType,
} from "./Cloudinary.types";

export const CloudinaryContext = createContext<CloudinaryContextType | null>(
  null
);

const CloudinaryProvider = ({
  children,
  cloudName,
}: CloudinaryProviderProps) => {
  const client = new Cloudinary({ cloud: { cloudName } });
  return (
    <CloudinaryContext.Provider value={{ client }}>
      {children}
    </CloudinaryContext.Provider>
  );
};

export default CloudinaryProvider;
