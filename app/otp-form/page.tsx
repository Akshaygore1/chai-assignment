import Container from "../_components/Container";
import OtpComponent from "../_components/OtpComponent";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-[#3F72AF] ">
      <Container>
        <OtpComponent />
      </Container>
    </div>
  );
}
