import Hold from "./Hold";
import Process from "./Process";

const HoldProcess = () => {
  return (
    <section className="pt-[60px] px-[30px] flex flex-col lg:gap-y-[80px] lg:pt-[80px] lg:px-[50px] lg:pb-[60px] 2xl:pt-[131px] 2xl:px-[160px] 2xl:pb-[120px] 3xl:px-[201px] 3xl:gap-y-[200px]">
      <Hold />
      <Process />
    </section>
  );
};

export default HoldProcess;
