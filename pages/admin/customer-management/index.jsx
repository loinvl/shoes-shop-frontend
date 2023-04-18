import AdminLayout from "@/components/layouts/AdminLayout";

export default function CustomerManagementPage() {
  return <div>CustomerManagementPage</div>;
}

CustomerManagementPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};
