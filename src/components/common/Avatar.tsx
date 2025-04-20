interface AvatarProps {
  src: string;
  alt?: string;
  clickable?: boolean;
}

function Avatar({ src, alt = "User", clickable = false }: AvatarProps) {
  const buttonProps = clickable
    ? {
        tabIndex: 0,
        role: "button",
        className: "btn btn-ghost btn-circle avatar",
      }
    : { className: "avatar" };

  return (
    <div {...buttonProps}>
      <div className="w-10 rounded-full overflow-hidden">
        <img src={src} alt={alt} />
      </div>
    </div>
  );
}

export default Avatar;
