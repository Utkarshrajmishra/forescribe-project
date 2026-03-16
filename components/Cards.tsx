import Image from "next/image";

interface CardsProps {
  svgPath: string;
}

const Cards = ({ svgPath }: CardsProps) => {
  return (
    <Image
      src={svgPath}
      alt=""
      width={374}
      height={543}
      className="h-auto w-[374px] object-cover"
      loading="lazy"
    />
  );
};

export default Cards;
