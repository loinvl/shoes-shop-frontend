import Link from "next/link";

export default function CustomLink(props) {
  return (
    <Link 
        {...props}
        style={{ textDecorationLine: "none", color: "inherit", width: "100%" }}
    >
        {props.children}
    </Link>
  );
}
