export default function VIT() {
  return (
    <main id = "VIT" className="w-full flex justify-around items-start laptop:min-h-[80vh] laptop:flex-row mobile:flex-col mobile:px-[1rem]">
      <section className="flex flex-col laptop:w-[49%] gap-[12px] laptop:h-full mobile:w-full mobile:px-[1rem]">
        <div className="font-ptMono text-white text-5xl border-[1px] border-[#292929] rounded-[20px] px-[28px] py-[28px] text-center ">
          ABOUT VIT?
        </div>
        <div className="font-ptMono text-white text-5xl border-[1px] border-[#292929] rounded-[20px] px-[28px] py-[28px] text-center h-auto">
          {`       `}
        </div>
        <div className="border-[1px] border-[#292929] rounded-[20px]">
          <div className="bg-imgYantra bg-no-repeat bg-cover bg-center border-[1px] border-[#292929] rounded-[20px] h-[600px]  mix-blend-hard-light"></div>
        </div>
      </section>
      <section className="flex flex-col laptop:w-[52%] mobile:gap-[12px] laptop:min-h-[80vh] mobile:px-[1rem]">
        <div className="font-ptMono leading-9 text-white text-2xl border-[1px] border-[#292929] rounded-[20px] px-[28px] py-[28px]">
          VIT (Vellore Institute of Technology) is a prestigious higher
          education institution in Vellore, Tamil Nadu, India. Established in
          1984, it's a top center for engineering, technology, and management
          education. VIT offers diverse undergraduate, postgraduate, and
          doctoral programs with highly qualified faculty and cutting-edge
          facilities. The institute encourages interdisciplinary research in
          areas like renewable energy and AI. With campuses in various cities
          and international collaborations, VIT promotes a multicultural
          learning environment. Strong industry partnerships provide internships
          and placements, enhancing students' skills. VIT's campus offers modern
          facilities for a vibrant student life, encouraging participation in
          co-curricular activities. Committed to excellence, VIT prepares future
          professionals with values for positive change.
        </div>
        <div className="font-ptMono text-white text-5xl border-[1px] border-[#292929] rounded-[20px] px-[28px] py-[28px] text-center">
          {`       `}
        </div>
      </section>
    </main>
  );
}
