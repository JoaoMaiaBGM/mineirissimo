import { IKImage } from "imagekitio-next";

export function ProjectImage({ path, alt }) {
  return (
    <IKImage
      path={path}
      alt={alt}
      width={800}
      height={600}
      transformation={[{
        width: "800",
        height: "600",
        quality: "80",
        format: "webp",
      }]}
      loading="lazy"
    />
  );
}