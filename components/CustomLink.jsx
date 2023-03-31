import Link from "next/link";

export default function CustomLink(props) {
  return (
    <Link 
        {...props}
        style={{...props.style, textDecorationLine: "none", color: "inherit"}}
    >
        {props.children}
    </Link>
  );
}
