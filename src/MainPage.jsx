import ContactUsMainSection from "./components/ContactUsMainSection.jsx";

const MainPage = () => {
    return (
            <main className={"bg-green-200 min-h-screen flex justify-center items-center"}>
                <div className={"bg-white rounded-2xl p-10 max-w-184 w-full flex flex-col gap-8"}>
                    <h1 className={"text-heading leading-heading tracking-heading text-grey-900 font-bold"}>Contact Us</h1>
                    <ContactUsMainSection/>
                </div>
            </main>
    );
};

export default MainPage;