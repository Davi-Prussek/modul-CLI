import { groupMultiselect } from "@clack/prompts";
import { handleCancel } from "../index.js";

export async function installers() {
  return handleCancel(
    await groupMultiselect({
        required: false,
      message: "Selecione os pacotes desejados:",
      options: {
        installers: [
          {
            label: "Axios",
            value: "axios",
          },
          {
            label: "VueUse",
            value: "@vueuse/core",
          },
          {
            label: "Day.js",
            value: "dayjs",
          },
          {
            label: "Zod",
            value: "zod",
          },
          {
            label: "vuetify",
            value: "vuetify",
          },
        ],
      },
    }),
  );
}
