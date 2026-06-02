import BookingForm from "./BookingForm";
import StudioInfo from "./StudioInfo";

export default function Contact() {
  return (
    <>
      {/* Section 1: Online Booking Form (Light background) */}
      <BookingForm />

      {/* Section 2: Studio Information & Interactive Map (Dark, premium background) */}
      <StudioInfo />
    </>
  );
}
