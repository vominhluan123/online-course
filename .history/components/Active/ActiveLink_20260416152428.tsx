import Link from 'next/link';
import React from 'react'
type ActieveLink = {
  url: string,
  chi
}
const ActiveLink = () => {
  return (
    <Link
      className="p-3 gap-3 flex items-center rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-FG transition-colors"
      href={url}
    >
      {icon}
      {title}
    </Link>
  );
}

export default ActiveLink