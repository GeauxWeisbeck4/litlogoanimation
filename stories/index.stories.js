import "../src/styles.ts";
import "../src/motion-lit.ts";
import { html } from "lit-html";

export default {
  parameters: {
    layout: "centered",
  },
};

export const story1 = () => html` <motion-lit></motion-lit> `;
