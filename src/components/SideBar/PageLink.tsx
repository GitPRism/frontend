import { Link } from "react-router-dom";

function PageLink() {
  return (
    <ul className="flex flex-col gap-1">
      <li>
        <Link to="/home">홈</Link>
      </li>
      <li>
        <Link to="">내 포트폴리오</Link>
      </li>
      <li>
        <Link to="">북마크</Link>
      </li>
      <li>
        <Link to="">내 활동</Link>
      </li>
    </ul>
  );
}

export default PageLink;
