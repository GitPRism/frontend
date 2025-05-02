interface AvatarProps {
  src: string;
  alt?: string;
  clickable?: boolean;
  width?: string;
}

function Avatar({
  src,
  alt = "User",
  clickable = false,
  width = "w-10",
}: AvatarProps) {
  const buttonProps = clickable
    ? {
        tabIndex: 0,
        role: "button",
        className: "btn btn-ghost btn-circle avatar",
      }
    : { className: "avatar" };

  return (
    <div {...buttonProps}>
      <div className={`${width} rounded-full overflow-hidden`}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}

export default Avatar;
