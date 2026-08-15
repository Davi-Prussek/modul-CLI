import { groupMultiselect } from "@clack/prompts";
import { handleCancel } from "../index.js";

export async function icons() {
  return handleCancel(
    await groupMultiselect({
        required: false,
      message: "Selecione a biblioteca de icones desejada:",
      options: {
        icons: [
          {
            label: "Font Awesome",
            value: "@fortawesome",
          },
          {
            label: "Flaticon UIcons",
            value: "@flaticon/flaticon-uicons",
          },
          {
            label: "Lucide Icons",
            value: "@lucide/vue",
          },
          {
            label: "Devicon",
            value: "devicon",
          },
          {
            label: "@mdi/font",
            value: "@mdi/font",
          },
        ],
      },
    }),
  );
}
