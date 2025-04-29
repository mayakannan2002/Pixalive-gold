import missionImg from './../../assets/About/mission.png';
import visionImg from './../../assets/About/vission.png';
import goalsImg from './../../assets/About/goal.png';



const MissionVisionGoals = () => {
  return (
    <div className="bg-[#f9f8fc] text-[#140113] py-14 px-20">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Mission */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center">
            OUR <span className="text-[#b98a30]">MISSION</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1 space-y-4 text-center md:text-left">
              <p className="text-gray-700 text-base leading-relaxed">
                To empower individuals and businesses by creating a secure, transparent, and innovative gold ecosystem that brings the value of gold closer to everyday life.
              </p>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
              <img src={missionImg} alt="Mission" className="w-64 h-64 object-contain" />
            </div>
          </div>
        </div>

        {/* Vision */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center">
            OUR <span className="text-[#b98a30]">VISION</span>
          </h2>
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10">
            <div className="flex-1 space-y-4 text-center md:text-right">
              <p className="text-gray-700 text-base leading-relaxed">
                To establish Pixalive Gold Network as the largest and most trusted gold ecosystem in India, fostering financial empowerment and accessibility through innovative services and strategic partnerships.
              </p>
            </div>
            <div className="flex-1 flex justify-center md:justify-start">
              <img src={visionImg} alt="Vision" className="w-64 h-64 object-contain" />
            </div>
          </div>
        </div>

        {/* Goals */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center">
            OUR <span className="text-[#b98a30]">GOALS</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1 space-y-4 text-center md:text-left">
              <p className="text-gray-700 text-base leading-relaxed">
                Expand to 4000+ branches across India to make gold services widely accessible. <br />
                Build trust through partnerships with top brands like MMTC-PAMP.
              </p>
            </div>
            <div className="flex-1 flex justify-center md:justify-end">
              <img src={goalsImg} alt="Goals" className="w-64 h-64 object-contain" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MissionVisionGoals;
