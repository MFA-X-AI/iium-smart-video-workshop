import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(false); // never overwrite a render
Config.setConcurrency(8);
