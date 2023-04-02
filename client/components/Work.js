import Card from './Card';
import { Works } from '@/JSON/Data';
const Work = () => {
  return (
    <div id="work" className="h-[90vh] pt-[6rem] mt-[1rem]">
      <div>
        <h1 className="text-2xl font-bold">Latest Works</h1>
        {/* {Works.map((work) => {
          return <Card />;
        })} */}
        <Card/>
      </div>
    </div>
  );
};

export default Work;
