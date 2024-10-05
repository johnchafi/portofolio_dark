import Footer from "@/components/Footer";
import { HeaderMenu } from "@/components/Header";
import HomeComponent from "@/components/Home";
import { BackgroundLines } from "@/components/ui/background-lines";
export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      
        <HeaderMenu />
        {/* <BackgroundLines className="flex items-center justify-center w-full flex-col px-4"> */}
          <main className="flex-1">
            <HomeComponent />
          </main>
        {/* </BackgroundLines> */}
        <Footer />
   
     
    </div>
  );
}
