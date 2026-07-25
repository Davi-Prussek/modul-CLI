import { text, confirm, select, groupMultiselect } from "@clack/prompts";

const ProjectName = await text({
  message: "Package name:",
});

const features = await groupMultiselect({
  message: "Select features to include in your project:",
  options: {
    features: [
      { label: "", value: "" },
    ],
    icons: [
        { label: "Font Awesome", value: "font-awesome" },
        { label: "Flaticon UIcons", value: "flaticon-uicons" },
        { label: "Lucide Icons", value: "lucide-icons" },
        { label: "Devicon", value: "devicon" },
    ]
  }
});

const framework_css = await select({
    message: "Select a CSS framework:",
    options: [
        { label: "Tailwind CSS", value: "tailwind" },
        { label: "Bootstrap", value: "bootstrap" },
    ]
})
