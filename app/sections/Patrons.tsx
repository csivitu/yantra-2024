import PatronsCard from "../components/PatronsCard"
export default function Patrons(){
    return (
      <main className="w-full flex flex-col justify-between px-[3rem] items-start gap-[2rem] ">
                <h1 className="text-[#eaeaea] text-6xl font-ptMono">PATRONS</h1>
          <section className="w-full grid laptop:grid-cols-4 laptop:px-[3rem] gap-[2rem] mobile:grid-cols-1">
          <PatronsCard  imgUrl={'/pfps/drgviswanathan.webp'} name={'Dr G Vishvanathan'} designation={'Chancellor'} />
          <PatronsCard imgUrl={'/pfps/gv selvam.webp'} name={'GV Selvam'} designation={'Vice President'} />
            <PatronsCard imgUrl={'/pfps/sankar.webp'} name={'Sankar Vishvanathan'} designation={'Vice President'} />
            <PatronsCard imgUrl={'/pfps/sekar.webp'} name={'Sekar Vishvanathan'} designation={'Vice President'} />
        </section>
      </main>
    )
}