import Avatar from "@/components/common/Avatar";
import { useNavigate } from "react-router-dom";
import { Bookmark, HeartPlus, HeartMinus } from "lucide-react";

interface CardProps {
  title: string;
  badgeRank?: number;
  imageUrl: string;
  avatarUrl: string;
  description: string;
  meta: string;
  bookmarkCount?: number;
  likeCount?: number;
  userName: string;
  updatedAt: string;
  portfolioId: number;
}

function Card({
  portfolioId,
  title,
  badgeRank,
  imageUrl,
  avatarUrl,
  description,
  userName,
  meta,
  updatedAt,
  bookmarkCount,
  likeCount,
}: CardProps) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate(`/portfolio/${portfolioId}`);
      }}
      className="card w-full shadow-sm hover:scale-[1.01] hover:shadow-lg hover:brightness-110 transition duration-200 ease-in-out cursor-pointer"
    >
      <figure className="aspect-[16/9] overflow-hidden">
        <img src={imageUrl} alt={title} />
      </figure>
      <div className="card-body p-4">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-lg font-semibold truncate">{title}</h2>
          {badgeRank && (
            <div className="badge badge-secondary text-sm flex-shrink-0">
              {badgeRank}
            </div>
          )}
        </div>
        <div className="flex gap-1.5 justify-between items-center">
          <Avatar src={avatarUrl} />
          <div className="flex-1 min-w-0">
            <p className="w-5/6 text-base truncate">{description}</p>
            <p className="w-5/6 text-sm text-home-text-sub truncate">
              {meta ? meta : `${userName} ${updatedAt}`}
            </p>
          </div>
          <div className="text-right text-sm">
            <div className="flex items-center gap-1">
              <Bookmark />
              {bookmarkCount ?? 0}
            </div>
            <div className="flex items-center gap-1">
              <HeartPlus />
              {likeCount ?? 0}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
