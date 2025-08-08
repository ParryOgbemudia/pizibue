import { useForm, type SubmitHandler } from "react-hook-form";
import Button from "../components/ui/Button";

type FormFields = {
  fullname: string;
  email: string;
  subject: string;
  description: string;
};

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto pt-34 pb-7.5 max-md:px-4 sm:px-10 md:px-16 md:pb-8 lg:px-20">
        <div className="xmd:grid-cols-2 xmd:grid xmd:gap-6 flex flex-col gap-10">
          <div className="xmd:basis-[628px] flex flex-col gap-4">
            <h2 className="xmd:text-[40px] text-[32px] font-black text-white">
              Contact Us
            </h2>
            <p className="xmd:text-[16px] text-[14px] font-normal text-[#818981]">
              Have questions, need a quote, or want to place an order? We’re
              here to help—reach out today and let’s talk fish.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="xmd:p-10 rounded-3xl bg-[#181818] px-4 pt-8 pb-10"
          >
            <div className="flex flex-col gap-10">
              <div className="grid gap-5">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="fullname"
                    className="text-[14px] font-normal text-[#818981]"
                  >
                    Full Name:
                  </label>
                  <input
                    {...register("fullname", {
                      required: "Full name is required",
                      validate: (value) =>
                        value.trim().split(/\s+/).length >= 2 ||
                        "Please enter at least two words",
                    })}
                    id="fullname"
                    type="text"
                    placeholder="Enter Your Full Name"
                    className="rounded-[8px] border border-[#494949] px-3 py-3.5 font-normal outline-none placeholder:text-[#818981]"
                  />
                  {errors.fullname && (
                    <p className="text-sm text-red-500">
                      {errors.fullname.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-[14px] font-normal text-[#818981]"
                  >
                    Email Address:
                  </label>
                  <input
                    {...register("email", {
                      required: "Please enter a valid email address",
                    })}
                    id="email"
                    type="email"
                    placeholder="Enter Email Address"
                    className="rounded-[8px] border border-[#494949] px-3 py-3.5 font-normal outline-none placeholder:text-[#818981]"
                  />
                  {errors.email && (
                    <div className="text-sm text-red-500">
                      {errors.email.message}
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="subject"
                    className="text-[14px] font-normal text-[#818981]"
                  >
                    Subject:
                  </label>
                  <input
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    id="subject"
                    type="text"
                    placeholder="Enter Subject"
                    className="rounded-[8px] border border-[#494949] px-3 py-3.5 font-normal outline-none placeholder:text-[#818981]"
                  />
                  {errors.subject && (
                    <div className="text-sm text-red-500">
                      {errors.subject.message}
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="description"
                    className="text-[14px] font-normal text-[#818981]"
                  >
                    Description:
                  </label>
                  <textarea
                    {...register("description", {
                      required: "Description is required",
                    })}
                    id="description"
                    placeholder="What Do You Need?"
                    className="h-[145px] resize-none rounded-[8px] border border-[#494949] px-3 py-3.5 font-normal outline-none placeholder:text-[#818981]"
                  ></textarea>
                  {errors.description && (
                    <p className="text-sm text-red-500">
                      {errors.description.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="xmd:self-end self-stretch">
                <Button
                  type="submit"
                  className="xmd:w-max flex w-full items-center justify-center px-4"
                >
                  {isSubmitting ? "Submitting..." : "Send Message"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
