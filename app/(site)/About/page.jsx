import Footer from "@/app/components/footer";
import Navigation from "@/app/components/mainNavigation";

export default function About() {
  return (
    <div>
      <div className="w-[85%] mx-auto h-full">
        <Navigation />
        <h1>About Us Page</h1>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
