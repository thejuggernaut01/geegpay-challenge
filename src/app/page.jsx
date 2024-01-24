import MainBar from "@/components/MainBar";
import SideBar from "@/components/SideBar";
import TopNavigation from "@/components/TopNavigation";

export default function Home() {
  return (
    <main className="bg-background dark:bg-black">
      <section className="flex h-screen">
        <aside className="w-[6%] border-r-2 border-gray-300">
          <SideBar />
        </aside>

        <article className="flex-1">
          <TopNavigation />

          <MainBar />
        </article>
      </section>
    </main>
  );
}
