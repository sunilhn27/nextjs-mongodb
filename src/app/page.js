import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <div className="text-center mx-auto py-5 space-y-4 ">
        <h1 className=" text-3xl font-bold">
          Contact US
        </h1>
        <p>
          Fill in all the Fields to submit
        </p>
      </div>
      <ContactForm />
    </>
  )
}
