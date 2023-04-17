export default function AdminLayout({children}){
    return (
        <div>
            <div>admin header</div>
            <main>{children}</main>
            <div>admin footer</div>
        </div>
    )
}