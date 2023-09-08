import { useRouter } from 'next/router';

export default function Link({ children, name }) {
  const router = useRouter();
  const href = `/projects/${name}`;
  const style = {
    textDecoration: 'none',
    color: '#333',
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
}
