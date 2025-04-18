import Image from 'next/image';

export default function OurTeams() {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <h2 className="text-center mb-16">
        <span className="inline-block border-y-2 border-black py-4 px-6 text-4xl font-bold tracking-wide text-black">
          OUR TEAMS
        </span>
      </h2>

      <div className="flex flex-col gap-20">
        {/* ACCELERON */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="relative w-full md:w-[500px] h-[350px] md:h-[400px] rounded-[35px] overflow-hidden mx-5">
            <Image
              src="/acceleron.png"
              alt="Acceleron Car"
              layout="fill"
              objectFit="cover"
              className="rounded-[35px]"
            />
          </div>
          <div className="max-w-xl">
            <h3 className="font-['Audiowide'] text-[40px] tracking-[0.2em] text-black mb-4">
              ACCELERON
            </h3>
            <p className="font-['Advent_Pro'] text-[20px] leading-[24px] tracking-[0.05em]  text-[#2E2E2E]">
              SAE NIT Kurukshetra is a collegiate club affiliated with SAE India, which is a wing of SAE International, on a national scale. The club is a platform for budding engineers to work together to arrive at solutions to the problems in the mobility field. It forms a link between naive talents and pioneers of the industry. Valuing the interdisciplinary nature of the automobile sector, undergraduate students from various branches strive to innovate better under the guidance of our professors here at NIT Kurukshetra. We bring our skills to many competitions.
            </p>
          </div>
        </div>

       
        <div className="flex flex-col md:flex-row-reverse items-center gap-2">
  {/* Image on the right */}
  <div className="relative w-[534px] h-[545px] rounded-[32px] overflow-hidden mr-10">
    <Image
      src="/nitrox.png"
      alt="Nitrox Car"
      layout="fill"
      objectFit="cover"
      className="rounded-[32px]"
    />
  </div>

  {/* Text on the left */}
  <div className="w-full md:w-1/2 flex flex-col items-start">
    <div className="max-w-[442px] w-full">
      <h3 className="font-['Audiowide'] text-[40px] tracking-[0.2em] text-black mb-4 text-right">
        NITROX
      </h3>
      <p className="font-['Advent_Pro'] text-[20px] leading-[24px] tracking-[0.05em] text-[#2E2E2E]">
        SAE NIT Kurukshetra is a collegiate club affiliated with SAE India,
        which is a wing of SAE International, on a national scale. The club
        is a platform for budding engineers to work together to arrive at
        solutions to the problems in the mobility field. It forms a link
        between naive talents and pioneers of the industry. Valuing the
        interdisciplinary nature of the automobile sector, undergraduate
        students from various branches strive to innovate better under the
        guidance of our professors here at NIT Kurukshetra. We bring our
        skills to many competitions.
      </p>
    </div>
  </div>
</div>




      </div>
    </section>
  );
}
