"use client";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { ListGroupItem } from "react-bootstrap";
export default function CourseNavigation() {
  
  

  const pathname = usePathname();
  const links = [
    { href: "Home", label: "Home" },
    { href: "Modules", label: "Modules" },
    { href: "Piazza", label: "Piazza" },
    { href: "Zoom", label: "Zoom" },
    { href: "Assignments", label: "Assignments" },
    { href: "Quizzes", label: "Quizzes" },
    { href: "Grades", label: "Grades" },
    { href: "People", label: "People" },
  ];
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
       {links.map((link) => (
        <ListGroupItem key={link.label} as={Link} href={link.href}
          className={`bg-white text-center border-0
              ${pathname.includes(link.label) ? "text-black" : "text-danger"}`}>
          
          {link.label}
        </ListGroupItem>
       ))}
    </div>
  );
}
