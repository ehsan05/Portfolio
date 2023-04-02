import Image from 'next/image';
import Link from 'next/link';
const Card = () => {
  return (
    <>
      <div className="w-full sm:w-[360px] border-white border rounded-2xl">
        <div className="w-[50%] h-[50%] p-2">
          <Link href="#">
            <Image
              src="/frontend.jpg"
              alt="Loading..."
              width={500}
              height={500}
            />
          </Link>
        </div>
        <div>
          <p>NFT Websites</p>
          
        </div>
      </div>
    </>
  );
};

export default Card;
