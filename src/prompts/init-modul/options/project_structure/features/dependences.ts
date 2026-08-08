import { groupMultiselect } from "@clack/prompts";
import { handleCancel } from "../index.js";

export async function dependences() {
  return handleCancel(
    await groupMultiselect({
      required: false,
      message: "Selecione as dependências desejadas:",
      options: {
        dependences: [
          {
            label: "Router Vue",
            value: "router",
          },
          {
            label: "Pinia",
            value: "pinia",
          },
          {
            label: "ESLint",
            value: "eslint",
          },
          {
            label: "Prettier",
            value: "prettier",
          },
          {
            label: "Vitest",
            value: "vitest",
          },
          {
            label: "End-to-End Testing",
            value: "playwright",
          },
          {
            label: "Vue I18n",
            value: "vue-i18n",
          },
        ],
      },
    }),
  );
}
