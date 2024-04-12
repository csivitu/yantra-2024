import Image from "next/image";

type TrackProps = {
  gridOption: number;
};

const Tracks: React.FC<TrackProps> = ({ gridOption }) => {
  return (
    <div
      id="tracks"
      className="flex flex-col justify-center items-center gap-[1.5rem] px-[3rem] w-full "
    >
      <div className="text-center tab:text-left leading-none font-ptMono text-[#eaeaea] text-6xl border border-[#292929] w-full pb-4 pt-3 tab:pl-6 rounded-[20px]">
        TRACKS
      </div>

      {/* Track 1 */}
      <div
        className={`gap-12 w-full p-6 grid mobile:grid-cols-1 tab:grid-cols-2  ${
          gridOption == 3 ? `laptop:grid-cols-3` : `laptop:grid-cols-4`
        }`}
      >
        <div className="flex justify-center items-center p-4 border rounded-[20px] border-white mobile:h-[40vh] tab:h-[35vh] laptop:h-[35vh]">
          <div className="flex flex-col mobile:p-3 tab:py-1 tab:px-4 laptop:p-6 justify-between bg-white w-full h-full rounded-[20px]">
            <div className="w-full flex font-bold font-ptMono text-2xl py-2 ">
              <div className="flex justify-between w-full items-center">
                <div className="flex mr-auto">1st</div>

                <div className="flex ml-auto">
                  <Image
                    alt="Track 1"
                    width={30}
                    height={30}
                    src={"/icons/Tracks/Track1.svg"}
                    className="ml-auto"
                  />
                </div>
              </div>
            </div>

            <div className=" text-wrap mobile:text-3xl tab:text-3xl laptop:text-4xl">
            REDUCED INEQUALITY
            </div>
          </div>
        </div>

        {/* Track 2 */}
        <div className="flex justify-center items-center p-4 border rounded-[20px] border-white mobile:h-[40vh] tab:h-[35vh] laptop:h-[35vh]">
          <div className="flex flex-col mobile:p-3 tab:px-4 laptop:p-6 justify-between bg-white w-full h-full rounded-[20px]">
            <div className="w-full flex font-bold font-ptMono text-2xl py-2 ">
              <div className="flex justify-between w-full items-center">
                <div className="flex mr-auto">2nd</div>

                <div className="flex ml-auto">
                  <Image
                    alt="Track 2"
                    width={30}
                    height={30}
                    src={"/icons/Tracks/Track2.svg"}
                    className="ml-auto"
                  />
                </div>
              </div>
            </div>

            <div className=" text-wrap mobile:text-3xl tab:text-4xl laptop:text-4xl">
              QUALITY, <br />
              EDUCATION
              <br />
            </div>
          </div>
        </div>

        {/* Track 3 */}
        <div className="flex justify-center items-center p-4 border rounded-[20px] border-white mobile:h-[40vh] tab:h-[35vh] laptop:h-[35vh]">
          <div className="flex flex-col mobile:p-3 tab:px-4 laptop:p-6 justify-between bg-white w-full h-full rounded-[20px]">
            <div className="w-full flex font-bold font-ptMono text-2xl py-2 ">
              <div className="flex justify-between w-full items-center">
                <div className="flex mr-auto">3rd</div>

                <div className="flex ml-auto">
                  <Image
                    alt="Track 3"
                    width={30}
                    height={30}
                    src={"/icons/Tracks/Track3.svg"}
                    className="ml-auto"
                  />
                </div>
              </div>
            </div>

            <div className=" text-wrap mobile:text-3xl tab:text-4xl laptop:text-4xl">
              SUSTAINTABLE CITY, <br />
              COMMUNITIES <br />
            </div>
          </div>
        </div>

        {/* Track 4 */}
        <div className="flex justify-center items-center p-4 border rounded-[20px] border-white mobile:h-[40vh] tab:h-[35vh] laptop:h-[35vh]">
          <div className="flex flex-col mobile:p-3 tab:px-4 laptop:p-6 justify-between bg-white w-full h-full rounded-[20px]">
            <div className="w-full flex font-bold font-ptMono text-2xl py-2 ">
              <div className="flex justify-between w-full items-center">
                <div className="flex mr-auto">4th</div>

                <div className="flex ml-auto">
                  <Image
                    alt="Track 4"
                    width={30}
                    height={30}
                    src={"/icons/Tracks/Track4.svg"}
                    className="ml-auto"
                  />
                </div>
              </div>
            </div>

            <div className=" text-wrap mobile:text-3xl tab:text-4xl laptop:text-4xl">
              DECENT WORK AND  <br />
              ECONOMIC GROWTH
            </div>
          </div>
        </div>

        {/* Track 5 */}
        <div className="flex justify-center items-center p-4 border rounded-[20px] border-white mobile:h-[40vh] tab:h-[35vh] laptop:h-[35vh]">
          <div className="flex flex-col mobile:p-3 tab:px-4 laptop:p-6 justify-between bg-white w-full h-full rounded-[20px]">
            <div className="w-full flex font-bold font-ptMono text-2xl py-2 ">
              <div className="flex justify-between w-full items-center">
                <div className="flex mr-auto">5th</div>

                <div className="flex ml-auto">
                  <Image
                    alt="Track 5"
                    width={30}
                    height={30}
                    src={"/icons/Tracks/Track5.svg"}
                    className="ml-auto"
                  />
                </div>
              </div>
            </div>

            <div className=" text-wrap mobile:text-3xl tab:text-4xl laptop:text-4xl">
            GOOD HEALTH AND <br /> WELL BEING
            </div>
          </div>
        </div>

        {/* Track 6 */}
        <div className="flex justify-center items-center p-4 border rounded-[20px] border-white mobile:h-[40vh] tab:h-[35vh] laptop:h-[35vh]">
          <div className="flex flex-col mobile:p-3 tab:px-4 laptop:p-6 justify-between bg-white w-full h-full rounded-[20px]">
            <div className="w-full flex font-bold font-ptMono text-2xl py-2 ">
              <div className="flex justify-between w-full items-center">
                <div className="flex mr-auto">6th</div>

                <div className="flex ml-auto">
                  <Image
                    alt="Track 6"
                    width={30}
                    height={30}
                    src={"/icons/Tracks/Track6.svg"}
                    className="ml-auto"
                  />
                </div>
              </div>
            </div>

            <div className=" text-wrap mobile:text-3xl tab:text-4xl laptop:text-4xl uppercase">
            PARTNERSHIP FOR GOALS
            </div>
          </div>
        </div>

        {/* Track 7 */}
        {/* <div className="flex justify-center items-center p-4 border rounded-[20px] border-white mobile:h-[40vh] tab:h-[35vh] laptop:h-[35vh]">
          <div className="flex flex-col mobile:p-3 tab:px-4 laptop:p-6 justify-between bg-white w-full h-full rounded-[20px]">
            <div className="w-full flex font-bold font-ptMono text-2xl py-2 ">
              <div className="flex justify-between w-full items-center">
                <div className="flex mr-auto">7th</div>

                <div className="flex ml-auto">
                  <Image
                    alt="Track 7"
                    width={30}
                    height={30}
                    src={"/icons/Tracks/Track7.svg"}
                    className="ml-auto"
                  />
                </div>
              </div>
            </div>

            <div className=" text-wrap mobile:text-3xl tab:text-3xl laptop:text-4xl">
              RESPONSIBLE <br />
              CONSUMPTION AND <br />
              PRODUCTION
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Tracks;
