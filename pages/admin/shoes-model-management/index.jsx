import AdminLayout from "@/components/layouts/AdminLayout";

export default function ShoesModelManagementPage() {
  return <div>ShoesModelManagementPage</div>;
}

ShoesModelManagementPage.getLayout = (page) => {
  return <AdminLayout>{page}</AdminLayout>;
};
