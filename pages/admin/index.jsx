import AdminLayout from "@/components/layouts/AdminLayout";

export default function AdminPage() {
  return <div>AdminPage</div>;
}

AdminPage.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
