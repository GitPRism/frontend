import Avatar from "@/components/common/Avatar";

interface CardProps {
  title: string;
  badgeRank?: number;
  imageUrl: string;
  avatarUrl: string;
  description: string;
  meta: string;
  bookmarkCount?: number;
  likeCount?: number;
}

function Card({
  title,
  badgeRank,
  imageUrl,
  avatarUrl,
  description,
  meta,
  bookmarkCount,
  likeCount,
}: CardProps) {
  return (
    <div className="card w-full shadow-sm">
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
            <p className="text-sm text-home-text-sub truncate">{meta}</p>
          </div>
          <div className="text-right text-sm">
            <div>북마크 {bookmarkCount ?? 0}</div>
            <div>좋아요 {likeCount ?? 0}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
