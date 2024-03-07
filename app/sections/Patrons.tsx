import PatronsCard from "../components/PatronsCard"
export default function Patrons(){
    return (
      <main className="w-full flex flex-col justify-between px-[3rem] items-start gap-[2rem]">
                <h1 className="text-[#eaeaea] text-6xl font-ptMono">PATRONS</h1>
          <section className="w-full grid grid-cols-4 px-[3rem] gap-[2rem]">
          <PatronsCard imgUrl={null} name={null} designation={null} />
          <PatronsCard imgUrl={null} name={null} designation={null} />
            <PatronsCard imgUrl={null} name={null} designation={null} />
            <PatronsCard imgUrl={null} name={null} designation={null} />
            <PatronsCard imgUrl={null} name={null} designation={null} />
            <PatronsCard imgUrl={null} name={null} designation={null} />
        </section>
      </main>
    )
}