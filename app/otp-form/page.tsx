import Container from "../_components/Container";
import Header from "../_components/ui/Header";
import OtpComponent from "../_components/OtpComponent";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-[#3F72AF] ">
      <Header color="#FFFFFF" />
      <Container>
        <OtpComponent />
      </Container>
    </div>
  );
}
