import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: (ButtonProps & { onClick?: () => void })[];
  image: ImageProps;
};

export type LandingServiceProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const LandingService = (props: LandingServiceProps) => {
  const { heading, description, buttons, image } = {
    ...LandingServiceDefaults,
    ...props,
  };

  return (
    <section id="relume" className="px-[5%] py-8 md:py-12 lg:py-16">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:gap-y-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-7xl">{heading}</h1>
            <p className="md:text-sm">{description}</p>
            <div className="mt-4 flex flex-wrap gap-2 md:mt-6">
              {buttons.map((button, index) => (
                <Button
                  key={index}
                  className={`${
                    button.variant === "primary"
                      ? "bg-black text-white hover:bg-blue-500 hover:text-black"
                      : button.variant === "secondary"
                      ? "bg-white text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white"
                      : button.variant === "outline"
                      ? "bg-transparent bg-black text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white"
                      : button.variant === "ghost"
                      ? "bg-transparent text-gray-700 hover:bg-gray-200 hover:text-black border-0"
                      : button.variant === "danger"
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : button.variant === "success"
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : button.variant === "link"
                      ? "bg-transparent text-blue-500 hover:underline"
                      : button.variant === "disabled"
                      ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                      : button.variant === "gradient"
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600"
                      : ""
                  } px-6 py-3 rounded-full`}
                  onClick={button.onClick}
                >
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <img
              src={image.src}
              className="w-full max-w-[500px] object-cover mx-auto"
              alt={image.alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const LandingServiceDefaults: Props = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [
    { title: "Button", onClick: () => alert("Button clicked!") },
    { title: "Button", variant: "secondary", onClick: () => alert("Secondary button clicked!") },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
};
