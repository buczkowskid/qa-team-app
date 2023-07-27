type Nullable<T> = T | null;
declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}
